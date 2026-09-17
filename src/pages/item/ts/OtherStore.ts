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
    name: '宥朋團體服紀念品',
    address: '新北市三重區永福街216號1樓',
    phone: '0989-800765',
    category: '服飾',
    discount: `班服、活服、社服30件以上單色印刷 
 1. gildan 200元再打8折
  2. 日本uA 220元再打八折`,
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=宥朋團體服紀念品+新北市三重區永福街216號1樓',
    concurrent: true,
    rule: '同校5個班級/社團一起製作，本公司負責送達學校',
  },
  {
    name: 'DeRoot休閒空間',
    address: '100台北市中正區新生南路一段60號B1',
    phone: '(02)2393-5300',
    category: '其他',
    discount: '尚未推出，敬請期待',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=DeRoot%E4%BC%91%E9%96%92%E7%A9%BA%E9%96%93+100台北市中正區新生南路一段60號B1',
    concurrent: true,
    rule: '',
  },
  {
    name: '齊可校園製作', 
    address: '台中市南屯區文心路一段378號16樓之3', 
    phone: '(04)2310-0889', 
    category: '服務', 
    discount: `1.製圖免費
2.所有品項85折
3.送貨到校免運費`, 
    concurrent: false, 
    rule: ''
  }
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
