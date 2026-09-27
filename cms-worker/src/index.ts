interface Env {
  GITHUB_PAT: string; // GitHub Personal Access Token (ghp_...)
  CF_AUD: string; // Cloudflare Access Audience Tag（Worker 應用的 AUD）
  CF_TEAM_NAME: string; // 你的 CF Access team name，例如 "myteam"
  ALLOWED_ORIGINS: string; // 例如 "https://your-site.pages.dev"
}

/**
 * 驗證 Cloudflare Access JWT
 * 文件: https://developers.cloudflare.com/cloudflare-one/identity/authorization-cookie/validating-json/
 */
async function verifyCloudflareAccessJWT(
  token: string,
  env: Env,
): Promise<boolean> {
  try {
    const certsUrl = `https://${env.CF_TEAM_NAME}.cloudflareaccess.com/cdn-cgi/access/certs`;
    const certsResponse = await fetch(certsUrl);
    if (!certsResponse.ok) return false;

    const certs = (await certsResponse.json()) as {
      keys: (JsonWebKey & { kid?: string })[];
    };

    const [headerB64] = token.split(".");
    const header = JSON.parse(
      atob(headerB64.replace(/-/g, "+").replace(/_/g, "/")),
    ) as { kid: string };

    const jwk = certs.keys.find((k) => k.kid === header.kid);
    if (!jwk) return false;

    const key = await crypto.subtle.importKey(
      "jwk",
      jwk,
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["verify"],
    );

    const [, payloadB64, sigB64] = token.split(".");
    const payload = JSON.parse(
      atob(payloadB64.replace(/-/g, "+").replace(/_/g, "/")),
    ) as { aud: string | string[]; exp: number };

    // 驗證 audience 和過期時間
    const aud = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
    if (!aud.includes(env.CF_AUD)) return false;
    if (Date.now() / 1000 > payload.exp) return false;

    const sigBytes = Uint8Array.from(
      atob(sigB64.replace(/-/g, "+").replace(/_/g, "/")),
      (c) => c.charCodeAt(0),
    );
    const dataBytes = new TextEncoder().encode(`${headerB64}.${payloadB64}`);

    return await crypto.subtle.verify(
      "RSASSA-PKCS1-v1_5",
      key,
      sigBytes,
      dataBytes,
    );
  } catch {
    return false;
  }
}

function getCookie(cookieHeader: string, name: string): string | null {
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const allowedOrigins = env.ALLOWED_ORIGINS.split(",").map((s) => s.trim());
    const originHeader = request.headers.get("Origin");
    const allowedOrigin = allowedOrigins.includes(originHeader || "")
      ? originHeader
      : allowedOrigins[0];

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin || "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // /auth — Decap CMS 開啟 popup 到這裡
    // Cloudflare Access 保護此 Worker，CF 會在 header 注入 CF-Access-JWT-Assertion
    if (url.pathname === "/auth") {
      const cfJWT =
        request.headers.get("CF-Access-JWT-Assertion") ??
        getCookie(request.headers.get("Cookie") ?? "", "CF_Authorization");

      if (!cfJWT) {
        return new Response("Unauthorized: no Cloudflare Access token", {
          status: 401,
        });
      }

      const valid = await verifyCloudflareAccessJWT(cfJWT, env);
      if (!valid) {
        return new Response("Unauthorized: invalid token", { status: 403 });
      }

      // 認證通過，把 GitHub PAT 用 postMessage 傳給 CMS
      // 必須走 Decap CMS 官方的握手協議：
      // 1. popup 先發 "authorizing:github" 給主視窗
      // 2. 主視窗回應後，popup 才發 "authorization:github:success:{token}"
      const html = `<!doctype html>
<html>
<head>
  <script>
    const allowedOrigins = ${JSON.stringify(allowedOrigins)};
    const receiveMessage = (message) => {
      // 只把 token 傳給允許的網站，避免被其他網頁開啟 popup 竊取
      if (!allowedOrigins.includes(message.origin)) return;
      window.opener.postMessage(
        'authorization:github:success:${JSON.stringify({ token: env.GITHUB_PAT })}',
        message.origin
      );
      window.removeEventListener("message", receiveMessage, false);
    }
    window.addEventListener("message", receiveMessage, false);
    window.opener.postMessage("authorizing:github", "*");
  </script>
</head>
<body>
  <p>正在授權 Decap CMS...</p>
</body>
</html>`;

      return new Response(html, {
        headers: { "Content-Type": "text/html;charset=UTF-8" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
};
