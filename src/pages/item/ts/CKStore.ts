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

const store = (data: Omit<Store, 'mapUrl'> & { mapUrl?: string }): Store => ({
  ...data,
  mapUrl:
    data.mapUrl ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${data.name} ${data.address}`)}`,
});

export const stores: Store[] = [
  store({
    name: '十平方圖書文具館（南海店）',
    address: '台北市中正區南海路48號',
    phone: '(02)2356-7768',
    category: '購物',
    discount: '文具商品8折（3C、特價品除外）；一般書9折、參考書85折起',
    concurrent: false,
    rule: '特價品不再折扣',
  }),
  store({
    name: '鼎紘影印有限公司',
    address: '台北市中正區寧波西街83號',
    phone: '(02)3393-1312',
    category: '服務',
    discount: '影印列印黑白每頁0.6元，彩色每頁4元',
    concurrent: false,
    rule: '不含手翻書',
  }),
  store({
    name: '懿品小珍（台北寧波店）',
    address: '台北市中正區寧波西街88之1號',
    phone: '(02)2397-0900',
    category: '熱食',
    discount: '單筆消費滿100元折5元',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '八方雲集（中正南海店）',
    address: '台北市中正區南海路50之1號',
    phone: '(02)3322-2109',
    category: '熱食',
    discount: '單筆消費滿100元享95折',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '昇客雞肉飯 中正店',
    address: '台北市中正區寧波西街88號',
    phone: '(02)3393-8141',
    category: '熱食',
    discount: '12:00～13:00精選餐盒與鎮魂特餐折10元；外送滿1,000元享9折',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '曼鯊鯊餐坊',
    address: '台北市中正區南昌路一段74巷6號1樓',
    phone: '(02)2393-5933',
    category: '熱食',
    discount: '持有效證件於下午營業時段購買單一主餐享9折；出示100分期中或期末試卷，單一主餐享5折',
    concurrent: true,
    rule: '限線上或掃碼點餐；試卷答案須全填寫且不得亂猜，並須於考完28日（3週）內兌換，逾期無效',
    mapUrl: 'https://www.google.com/maps/place/曼鯊鯊餐坊/@25.030863,121.517001,15z',
  }),
  store({
    name: 'CoCo都可（南昌店）',
    address: '台北市中正區牯嶺街55號',
    phone: '(02)2321-3329',
    category: '飲料',
    discount: '憑學生證折5元；建中外送買10送1、滿1,000元享9折或滿30杯享85折',
    concurrent: false,
    rule: '外送優惠僅限建中',
  }),
  store({
    name: '豪季水餃專賣店（牯嶺店）',
    address: '台北市中正區泉州街9號',
    phone: '(02)3322-4713',
    category: '熱食',
    discount: '消費滿100元折10元',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '金仙快餐便當',
    address: '台北市中正區寧波西街74號',
    phone: '(02)2321-3787',
    category: '熱食',
    discount: '便當含4樣副菜，其中1樣可換金仙滷肉；內用可加半碗飯',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '動翅音樂',
    address: '台北市中正區金華街19之1號',
    phone: '(02)2351-0177',
    category: '服務',
    discount: '消耗品、零配件及練團室享9折',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '豐盛搭伙之店',
    address: '台北市中正區泉州街4之1號',
    phone: '(02)2367-3188',
    category: '熱食',
    discount: '免費加大；集點卡消費滿10次贈餐點1份',
    concurrent: true,
    rule: '集點贈送餐點不含合菜及魚類',
  }),
  store({
    name: '建中黑砂糖刨冰',
    address: '台北市中正區泉州街35號',
    phone: '(02)2305-4750',
    category: '甜點',
    discount: '刨冰可多加1種配料',
    concurrent: true,
    rule: '',
  }),
  store({
    name: '三元堂拉麵專門店',
    address: '台北市中正區南昌路一段59巷3號',
    phone: '(02)2303-2151',
    category: '熱食',
    discount: '消費拉麵1碗，贈可樂餅1塊',
    concurrent: false,
    rule: '同批顧客可選集點卡活動或本優惠，二擇一',
  }),
  store({
    name: '日日築食',
    address: '台北市中正區南昌路一段59巷22號',
    phone: '(02)2396-3378',
    category: '熱食',
    discount: '內用定食或鍋膳折5元',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '建中豆漿補給站',
    address: '台北市中正區寧波西街124之2號',
    phone: '(02)2397-4296',
    category: '熱食',
    discount: '所有飲料折5元',
    concurrent: true,
    rule: '',
  }),
  store({
    name: '吉仕達義麵房（南昌店）',
    address: '台北市中正區南昌路一段50之2號',
    phone: '(02)2396-8879',
    category: '熱食',
    discount: '加飯、加麵免費',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '香香雞魯飯',
    address: '台北市中正區重慶南路三段1之2號',
    phone: '(02)3393-1001',
    category: '熱食',
    discount: '麵類及飯類折5元',
    concurrent: true,
    rule: '',
  }),
  store({
    name: 'EBISU curry&coffee',
    address: '台北市中正區寧波西街78號',
    phone: '0937-638-027',
    category: '熱食',
    discount: '憑學生證贈湯',
    concurrent: false,
    rule: '',
  }),
  store({
    name: 'EBISU KITCHEN',
    address: '台北市中正區寧波西街77號',
    phone: '0966-560-037',
    category: '熱食',
    discount: '憑學生證贈湯',
    concurrent: false,
    rule: '',
  }),
];

export const getStoresByCategory = (category: string): Store[] => {
  return stores.filter((store) => store.category === category);
};

export const getOtherStores = (): Store[] => {
  const otherCategories = ['其他', '運動', '服飾', '音樂', '購物', '服務'];
  return stores.filter((store) => otherCategories.includes(store.category));
};

export const goToMap = (url: string): void => {
  window.open(url, '_blank');
};
