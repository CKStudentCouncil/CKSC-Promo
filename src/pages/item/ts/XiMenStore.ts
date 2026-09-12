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
    name: '阿宗麵線',
    address: '108台北市萬華區峨眉街8-1號',
    phone: '02-2388-8808',
    category: '熱食',
    discount: '每碗折5元',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=阿宗麵線+108台北市萬華區峨眉街8-1號',
    concurrent: false,
    rule: '',
  },
  {
    name: '一支麥冰品店',
    address: '台北市萬華區中華路一段114巷12號',
    phone: '02-2331-0016',
    category: '甜點',
    discount: '全品項9折',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=一支麥冰品店+台北市萬華區中華路一段114巷12號',
    concurrent: false,
    rule: '',
  },
  {
    name: '師園鹽酥雞 西門店',
    address: '台北市萬華區成都路28號',
    phone: '02-2314-3966',
    category: '速食',
    discount: '線上點餐，滿百即贈飲料乙杯',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=師園鹽酥雞+西門店+台北市萬華區成都路28號',
    concurrent: true,
    rule: '',
  },
  {
    name: '引好創藝有限公司',
    address: '台北市萬華區成都路67號4樓',
    phone: '02-2370-7070',
    category: '服飾',
    discount: `1. T-shirt製作滿50件送圖案一版一色
2. T-shirt製作滿45件送44mm小胸章，一件一枚
3. 製作各式印刷品排版設計免費
4. 製作300本海報送300張A5雙面彩色DM
5. 製作手冊200本以上，贈送同數量海報及卡片
6. 製作金額500元以上，贈送旗幟或掛簾`,
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=引好創藝有限公司+台北市萬華區成都路67號4樓',
    concurrent: false,
    rule: '',
  },
  {
    name: '艋舺雞排Monga西門店지파이',
    address: '108台北市萬華區中華路一段110號',
    phone: '0223-813-938',
    category: '熱食',
    discount: '尚未推出，敬請期待',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=艋舺雞排Monga西門店+108台北市萬華區中華路一段110號',
    concurrent: false,
    rule: '',
  },
  {
    name: '帕斯塔焗麵所',
    address: '108台北市萬華區中華路一段114巷2號1樓',
    phone: '0223-818-668',
    category: '熱食',
    discount: '尚未推出，敬請期待',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=帕斯塔焗麵所+108台北市萬華區中華路一段114巷2號1樓',
    concurrent: false,
    rule: '',
  },
  {
    name: '西門町芒菓冰',
    address: '108台北市萬華區漢中街17號',
    phone: '(02)2388-8511',
    category: '甜點',
    discount: '雪花冰全品項95折，不含飲料及其他品項。',
    mapUrl:
      'google.com/maps/place/Ximen+Mango+Shaved+Ice/@25.0293189,121.503744,15z/data=!4m6!3m5!1s0x3442a90eade652eb:0x6a1921e8e048356!8m2!3d25.0453137!4d121.5078569!16s%2Fg%2F1jgm383vm?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D',
    concurrent: false,
    rule: '',
  },
  {
    name: '魚池貳壹-西門店',
    address: '108台北市萬華區漢口街二段5號',
    phone: '02-2388-1319',
    category: '飲料',
    discount: '全品項可享九折優惠',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=魚池貳壹-西門店+108台北市萬華區漢口街二段5號',
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
