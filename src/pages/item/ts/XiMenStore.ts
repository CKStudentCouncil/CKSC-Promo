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
    name: '阿宗麵線',
    address: '台北市萬華區峨眉街8之1號',
    phone: '(02)2388-8808',
    category: '熱食',
    discount: '每碗折5元',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '一支麥冰品店',
    address: '台北市萬華區中華路一段114巷12號',
    phone: '(02)2331-0016',
    category: '甜點',
    discount: '全品項享9折',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '師園鹽酥雞（西門店）',
    address: '台北市萬華區成都路28號',
    phone: '(02)2314-3966',
    category: '熱食',
    discount: '線上點餐滿100元贈飲料1杯',
    concurrent: true,
    rule: '',
  }),
  store({
    name: '艋舺雞排 Monga（西門店）',
    address: '台北市萬華區中華路一段110號',
    phone: '(02)2381-3938',
    category: '熱食',
    discount: '尚未推出，敬請期待',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '帕斯塔焗麵所',
    address: '台北市萬華區中華路一段114巷2號1樓',
    phone: '(02)2381-8668',
    category: '熱食',
    discount: '尚未推出，敬請期待',
    concurrent: true,
    rule: '',
  }),
  store({
    name: '西門町芒菓冰',
    address: '台北市萬華區漢中街17號',
    phone: '(02)2388-8511',
    category: '甜點',
    discount: '雪花冰全品項享95折',
    concurrent: false,
    rule: '不含飲料及其他品項',
    mapUrl:
      'https://www.google.com/maps/place/Ximen+Mango+Shaved+Ice/@25.0293189,121.503744,15z/data=!4m6!3m5!1s0x3442a90eade652eb:0x6a1921e8e048356!8m2!3d25.0453137!4d121.5078569!16s%2Fg%2F1jgm383vm?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D',
  }),
  store({
    name: '魚池貳壹（西門店）',
    address: '台北市萬華區漢口街二段5號',
    phone: '(02)2388-1319',
    category: '飲料',
    discount: '全品項享9折',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '三兄妹雪花冰（西門町總店）',
    address: '台北市萬華區漢中街23號',
    phone: '(02)2381-2650',
    category: '甜點',
    discount: '全品項享95折',
    concurrent: true,
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
