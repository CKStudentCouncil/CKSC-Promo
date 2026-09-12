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
    name: '十平方圖書文具館—南海店',
    address: '台北市中正區南海路48號',
    phone: '02-2356-7768',
    category: '其他',
    discount: '文具商品8折（3C、特價品除外），圖書類品一般書9折，參考書85折起（特價品不再折扣）',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=十平方圖書文具館+台北市中正區南海路48號',
    concurrent: false,
    rule: '',
  },
  {
    name: '鼎紘影印有限公司',
    address: '台北市中正區寧波西街83號',
    phone: '02-3393-1312',
    category: '其他',
    discount: '影印列印黑白每頁0.6元，彩色每頁4元(不含手翻書)',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=鼎紘影印+台北市中正區寧波西街83號',
    concurrent: true,
    rule: '',
  },
  {
    name: '那懿村',
    address: '台北市中正區寧波西街88之1號',
    phone: '02-2397-0900',
    category: '熱食',
    discount: '單筆消費滿100元折5元',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=懿品小珍+台北市中正區寧波西街88之1號',
    concurrent: false,
    rule: '',
  },
  {
    name: '八方雲集（中正南海店）',
    address: '台北市中正區南海路50—1號',
    phone: '02-3322-2109',
    category: '熱食',
    discount: '單筆消費滿100元95折',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=八方雲集+台北市中正區南海路50號',
    concurrent: false,
    rule: '',
  },
  {
    name: '昇客雞肉飯 中正店',
    address: '台北市中正區寧波西街88號',
    phone: '02-3393-8141',
    category: '熱食',
    discount: `1. 12～13點 精選餐盒與鎮魂特餐折10元
2. 外送滿千打九折`,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=昇客雞肉+台北市中正區寧波西街88號',
    concurrent: false,
    rule: '',
  },
  {
    name: '曼鯊鯊餐坊',
    address: '台北市中正區南昌路一段74巷6號1樓',
    phone: '02-2393-5933',
    category: '熱食',
    discount: `1. 下午營業時段，（內用/外帶）單一主餐九折
2.出示100分（答案需全填寫不得亂猜）（期中期末試卷單一主餐五折優待)`,
    mapUrl: 'https://www.google.com/maps/place/曼鯊鯊餐坊/@25.030863,121.517001,15z',
    concurrent: true,
    rule: `1. 線上或掃碼點餐
2. 期中期末考需於考完28日（3周）內兌換，逾時無效`,
  },
  {
    name: 'CoCo都可 南昌店',
    address: '台北市中正區寧波西街83-2號',
    phone: '02-2321-3329',
    category: '飲料',
    discount: `憑學生證折5元（全品項，優惠不併用）
建中外送買10送1or滿千9折or滿30杯85折（不併用）`,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=CoCo都可+台北市中正區寧波西街83-2號',
    concurrent: false,
    rule: '外送僅建中',
  },
  {
    name: '有煎餃子館 北市寧波館',
    address: '台北市中正區寧波西街100號1樓',
    phone: '02-2332-5085',
    category: '早午餐',
    discount: '任十顆餃子不限口味搭配小菜/飲料/湯品折扣5元',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=有煎餃子館+台北市中正區寧波西街100號',
    concurrent: true,
    rule: '',
  },
  {
    name: '豪季水餃專賣店 牯嶺店',
    address: '台北市中正區泉州街9號',
    phone: '02-2307-6310',
    category: '熱食',
    discount: '滿100元折10元',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=豪季水餃+台北市中正區泉州街9號',
    concurrent: true,
    rule: '',
  },
  {
    name: '金仙快餐便當',
    address: '台北市中正區寧波西街74號',
    phone: '02-2321-3787',
    category: '熱食',
    discount: `1. 便當均含4樣副菜，其中一樣可換金仙滷肉
2. 內用可加半碗飯`,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=金仙快餐便當+台北市中正區寧波西街74號',
    concurrent: false,
    rule: '',
  },
  {
    name: '動翅音樂',
    address: '台北市中正區金華街19-1號',
    phone: '02-2351-0177',
    category: '音樂',
    discount: '消耗品、零配件、練團室9折優惠',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=動翅音樂+台北市中正區金華街19-1號',
    concurrent: false,
    rule: '',
  },
  {
    name: '搭伙',
    address: '台北市中正區泉州街4-1號',
    phone: '02-2367-3188',
    category: '熱食',
    discount: '免費加大',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=搭伙+台北市中正區泉州街4-1號',
    concurrent: false,
    rule: '',
  },
  {
    name: '建中黑砂糖刨冰',
    address: '台北市中正區泉州街35號',
    phone: '02-2305-4750',
    category: '甜點',
    discount: '刨冰可多加一種配料',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=建中黑砂糖刨冰+台北市中正區泉州街35號',
    concurrent: true,
    rule: '',
  },
  {
    name: '三元堂拉麵專門店',
    address: '台北市中正區南昌路一段59巷3號',
    phone: '02-2303-2151',
    category: '熱食',
    discount: '凡消費拉麵一碗，贈送可樂餅一塊。',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=三元堂+台北市中正區南昌路一段59巷3號',
    concurrent: false,
    rule: '同批顧客可選擇集點卡活動或是此優惠方案。',
  },
  {
    name: '建中豆漿補給站',
    address: '台北市中正區寧波西街124-2號',
    phone: '02-2397-4296',
    category: '熱食',
    discount: '所有飲料便宜五元。',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=建豆+台北市中正區寧波西街124-2號',
    concurrent: true,
    rule: '',
  },
  {
    name: '吉仕達義麵房 南昌店',
    address: '台北市中正區南昌路一段50-2號',
    phone: '02-2396-8879',
    category: '熱食',
    discount: '加飯加麵免費',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=吉仕達義麵房+台北市中正區南昌路一段50-2號',
    concurrent: true,
    rule: '',
  },
  {
    name: '香香雞魯飯',
    address: '台北市中正區重慶南路三段1-2號',
    phone: '02-3393-1001',
    category: '熱食',
    discount: '麵類和飯類折扣5元',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=香香雞魯飯+台北市中正區重慶南路三段1-2號',
    concurrent: true,
    rule: '',
  },
  {
    name: 'EBISU curry&coffee',
    address: '台北市中正區寧波西街78號',
    phone: '0937-638-027',
    category: '熱食',
    discount: '憑學生證送湯',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=EBISU+台北市中正區寧波西街78號',
    concurrent: true,
    rule: '',
  },
  {
    name: 'EBISU KITCHEN',
    address: '台北市中正區寧波西街77號',
    phone: '0966-560-037',
    category: '熱食',
    discount: '憑學生證送湯',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=EBISU+KITCHEN+台北市中正區寧波西街77號',
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
