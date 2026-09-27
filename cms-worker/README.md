# Cloudflare Worker - Decap CMS 認證（Cloudflare Access 版）

網站後台 `/admin`（Decap CMS）使用此 Worker 登入 GitHub，搭配 **Cloudflare Access** 進行身份驗證，**不需要** GitHub OAuth App。

## 架構說明

```
使用者 → /admin（Decap CMS）→ 開啟 Worker /auth popup
      → Cloudflare Access（Google / Email OTP / 等）→ Worker 驗證 CF JWT
      → 回傳 GitHub PAT 給 CMS → CMS 直接 commit 到 GitHub → GitHub Actions 部署到 Firebase
```

- 登入由 **Cloudflare Access** 負責（在 CF Dashboard 設定，支援 Google、GitHub、OTP 等）
- Worker 只驗證 CF Access 簽發的 JWT，通過後才把 GitHub PAT 傳給 `ALLOWED_ORIGINS` 內的網站
- GitHub PAT 存在 Worker secret，不會進 git

## 設定步驟

### 1. 建立 GitHub Personal Access Token (PAT)

1.  GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens
2.  Resource owner 選 **CKStudentCouncil**（組織可能需要管理員核准 fine-grained token）
3.  Repository access 只選 `CKStudentCouncil/CKSC-Promo`
4.  設定 Repository permissions：`Contents: Read and write`、`Metadata: Read`
5.  記下 token（`github_pat_...`）

### 2. 設定 Cloudflare Access

只需要保護 **Worker**（網站本身在 Firebase Hosting，`/admin` 頁面是公開的，但沒有 token 就無法讀寫 repo）：

1.  Cloudflare Dashboard → Zero Trust → Access → Applications → Add an application
2.  選 **Self-hosted**
3.  Application domain：`cksc-promo-cms-admin.<your-subdomain>.workers.dev`
4.  新增 Policy：允許可以編輯的人的 Google 帳號 / Email
5.  記下這個 **Application Audience (AUD) tag**（用於 Worker 的 `CF_AUD`）

### 3. 部署 Worker

```bash
cd cms-worker
npm install

# 設定 secrets（不會進 git）
npx wrangler secret put GITHUB_PAT        # 貼上 GitHub PAT
npx wrangler secret put CF_AUD            # 貼上 Worker 的 AUD tag

# 視需要修改 wrangler.toml 中的 ALLOWED_ORIGINS 和 CF_TEAM_NAME
npx wrangler deploy
```

### 4. 確認 Decap CMS 設定

`public/admin/config.yml` 的 `backend.base_url` 要是 Worker 部署後的網址：

```yaml
backend:
  name: github
  repo: CKStudentCouncil/CKSC-Promo
  branch: main
  base_url: https://cksc-promo-cms-admin.<your-subdomain>.workers.dev/
```

## 使用

打開 `https://cktfgpromo.cksc.tw/admin/`，按「Login with GitHub」→ 通過 Cloudflare Access → 編輯店家資料 → 發佈。
發佈後會直接 commit 到 `main`，GitHub Actions 會自動 build 並部署到 Firebase Hosting。
