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
    name: '演色（捷運古亭）',
    address: '台北市中正區羅斯福路二段50號1樓',
    phone: '(02)2327-8022',
    category: '服務',
    discount: '尚未推出，敬請期待',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '人性空間（總店）',
    address: '台北市中正區羅斯福路三段286巷4弄1之1號',
    phone: '0938-957-211',
    category: '服務',
    discount: '平時最低價160元；使用投影機為170元',
    concurrent: false,
    rule: '',
    mapUrl:
      'https://www.google.com/maps/place/Human+Space+Roosevelt/@25.0180493,121.5327412,17z/data=!3m1!5s0x3442a98b90be04df:0x6e84e240a4fe45a2!4m10!1m2!2m1!1z5Lq65oCn56m66ZaTIOe4veW6lw!3m6!1s0x3442a98b9b1e8b3f:0xfc84591eb30f101d!8m2!3d25.0158629!4d121.5321137!15sChPkurrmgKfnqbrplpMg57i95bqXWhciFeS6uuaApyDnqbrplpMg57i9IOW6l5IBFmZ1bmN0aW9uX3Jvb21fZmFjaWxpdHmaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUmxiVmxtYTJsM1JSQUKqAUsKCy9nLzF0bDdsZHRtEAEyHxABIhvg7HjXiSWC3BpQbj8e9Hkn5PuN5Z68_YQtZgUyGRACIhXkurrmgKcg56m66ZaTIOe4vSDlupfgAQD6AQQIABAX!16s%2Fg%2F1tl7ldtm?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D',
  }),
  store({
    name: 'DeRoot休閒空間',
    address: '台北市中正區新生南路一段60號B1',
    phone: '(02)2393-5300',
    category: '服務',
    discount: '尚未推出，敬請期待',
    concurrent: false,
    rule: '',
  }),
  store({
    name: '宥朋團體服紀念品',
    address: '新北市三重區永福街216號1樓',
    phone: '(02)2389-9112',
    category: '服務',
    discount: '尚未推出，敬請期待',
    concurrent: true,
    rule: '',
  }),
  store({
    name: '齊可校園製作',
    address: '台中市南屯區文心路一段378號16樓之3',
    phone: '(04)2310-0889',
    category: '服務',
    discount: '製圖免費；所有品項85折；送貨到校免運費',
    concurrent: false,
    rule: '',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=齊可校園製作+台中市南屯區文心路一段378號16樓之3',
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
