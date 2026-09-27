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

// Raw shape of src/content/stores/*.json, edited through Decap CMS (/admin)
export interface StoreData {
  name: string;
  address: string;
  phone: string;
  category: string;
  discount: string;
  concurrent: boolean;
  rule?: string;
  mapUrl?: string;
}

const otherCategories = ['其他', '運動', '服飾', '音樂', '購物', '服務'];

const toStore = (data: StoreData): Store => ({
  ...data,
  rule: data.rule ?? '',
  mapUrl:
    data.mapUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${data.name} ${data.address}`)}`,
});

export const createStoreList = (data: { stores: StoreData[] }) => {
  const stores = data.stores.map(toStore);
  return {
    stores,
    getStoresByCategory: (category: string): Store[] =>
      stores.filter((store) => store.category === category),
    getOtherStores: (): Store[] =>
      stores.filter((store) => otherCategories.includes(store.category)),
  };
};

export const goToMap = (url: string): void => {
  window.open(url, '_blank');
};
