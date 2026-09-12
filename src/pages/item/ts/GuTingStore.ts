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
    name: '演色—捷運古亭',
    address: '台北市中正區羅斯福路二段50號一樓',
    phone: '(02)2327-8022',
    category: '服飾',
    discount: `A | 服裝項目
 1 滿10件送1件
 2 製圖設計免費
 3 贈IG宣傳圖
 B | 印刷項目
 全面6~8折
 C | 物流服務
 免費配送到校/專人送至校內指定地點
 D | 拍貼機
 可向1997申請贊助拍貼機到校內`,
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=演色—捷運古亭+台北市中正區羅斯福路二段50號一樓',
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
