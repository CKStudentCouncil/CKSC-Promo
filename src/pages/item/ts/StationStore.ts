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
    name: 'best義pasta食堂',
    address: '台北市中正區南陽街3號2樓',
    phone: '(02)2370-2568',
    category: '熱食',
    discount: '選1份主餐，豆腐、薯條、濃湯三選一',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '三民書局（重南店）',
    address: '台北市中正區重慶南路一段61號',
    phone: '(02)2361-7511',
    category: '購物',
    discount: '消費滿999元現折50元；三民、東大出版輔助教材79折；原文小說75折',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '卯時設計有限公司',
    address: '台北市大同區太原路8巷3號',
    phone: '(02)2311-0357',
    category: '服務',
    discount: '印刷品享9折；服飾製圖費5折；網路宣傳設計IG一式',
    concurrent: false,
    rule: '印刷品優惠不可與成發專案內容合併使用',
  }),
  store({
    name: '洋庭坊義大利麵',
    address: '台北市中正區南陽街15號之2',
    phone: '(02)2370-2377',
    category: '熱食',
    discount: '折5元或免費加大',
    concurrent: false,
    rule: '兩則優惠只能擇一',
  }),
  store({
    name: 'KOKODe炒麵專門店（原天神屋台炒麵麵包）',
    address: '台北市中正區南陽街17巷1號',
    phone: '0908-683-335',
    category: '熱食',
    discount: '醬汁炒麵單次購買滿5份送1份',
    concurrent: false,
    rule: '限現場購買，外送不適用',
  }),
  store({
    name: '服麗社團禮服',
    address: '台北市中正區懷寧街17號5樓',
    phone: '(02)2331-5750',
    category: '服務',
    discount:
      '製作班服或社服滿8,000元，享免費製圖1次並贈送衣服1件；另可從以下優惠擇一：①不限件數免運到府；②班級或社團老師免費贈送1件；③贈4.4cm全彩圓形胸章，製作幾件即贈幾個；④印花1色，金粉或銀粉不加價；⑤贈專屬貼紙200張，可選珠光或高黏、方型或長型；⑥贈訂製雙透全彩班旗1面',
    concurrent: false,
    rule: '免運到府優惠不適用急件',
  }),
  store({
    name: 'CoCo都可（台北開封店）',
    address: '台北市中正區開封街一段29號',
    phone: '(02)2331-2885',
    category: '飲料',
    discount: '店內全品項飲品60元以下每杯折5元，60元以上每杯折10元',
    concurrent: false,
    rule: '限自取，外送不適用',
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
