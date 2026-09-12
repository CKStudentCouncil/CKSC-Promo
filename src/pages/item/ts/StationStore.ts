export interface Store {
  name: string;
  address: string;
  phone: string;
  category: string;
  discount: string;
  mapUrl: string;
  concurrent: boolean;
  rule: string;
}

export const stores: Store[] = [
  {
    name: 'best義pasta食堂',
    address: '100台北市中正區南陽街3號2樓',
    phone: '02-2370-2568',
    category: '熱食',
    discount: '選一主餐送豆腐、薯條、濃湯三選一',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=best義pasta食堂+100台北市中正區南陽街3號2樓',
    concurrent: false,
    rule: '',
  },
  {
    name: '三民書局 (重南店)',
    address: '台北市中正區重慶南路一段61號',
    phone: '02-2361-7511',
    category: '其他',
    discount: `1. 消費滿999 現折50
2. 三民、東大出版輔助教材79折
3. 原文小說75折`,
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=三民書局+(重南店)+台北市中正區重慶南路一段61號',
    concurrent: false,
    rule: '',
  },
  {
    name: '卯時設計有限公司',
    address: '台北市大同區太原路8巷3號',
    phone: '02-2311-0357',
    category: '服飾',
    discount: `1. 印刷品九折優惠（成發專案不合併）
2. 服飾製圖費五折優惠
3. 網路宣傳設計IG一式`,
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=卯時設計有限公司+台北市大同區太原路8巷3號',
    concurrent: false,
    rule: '',
  },
  {
    name: '洋庭坊義大利麵',
    address: '台北市中正區南陽街15號之2',
    phone: '02-2370-2377',
    category: '熱食',
    discount: '折5元或免費加大',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=洋庭坊義大利麵+台北市中正區南陽街15號之2',
    concurrent: true,
    rule: '',
  },
  {
    name: '北車0.3熱門音樂中心',
    address: '台北市中正區忠孝西路一段7號1樓',
    phone: '02-2383-1780',
    category: '音樂',
    discount: `1. 大練團室租用2小時以上（含）每小時折50元
2. 購買器材享九折優惠`,
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=北車0.3熱門音樂中心+台北市中正區忠孝西路一段7號1樓',
    concurrent: false,
    rule: '',
  },
  {
    name: '服麗社團禮服',
    address: '台北市中正區懷寧街17號5樓',
    phone: '02-2331-5750',
    category: '服飾',
    discount: '校金念邀團夥書（戲總中送總包4 組另印花符效不加價（金、銀粉、發泡三',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=服麗社團禮服+台北市中正區懷寧街17號5樓',
    concurrent: false,
    rule: '',
  },
  {
    name: 'CoCo都可 台北開封',
    address: '10047台北市中正區開封街一段29號',
    phone: '0223-312-885',
    category: '飲料',
    discount: '單次消費享9折優惠',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=CoCo都可+台北開封+10047台北市中正區開封街一段29號',
    concurrent: false,
    rule: '',
  },
];

export const getStoresByCategory = (category: string): Store[] => {
  return stores.filter((store) => store.category === category);
};

export const getOtherStores = (): Store[] => {
  const otherCategories = ['其他', '運動', '服飾', '音樂'];
  return stores.filter((store) => otherCategories.includes(store.category));
};

export const goToMap = (url: string): void => {
  window.open(url, '_blank');
};
