import data from 'src/content/stores/ximen.json';
import { createStoreList } from './store';

export type { Store } from './store';
export { goToMap } from './store';

export const { stores, getStoresByCategory, getOtherStores } = createStoreList(data);
