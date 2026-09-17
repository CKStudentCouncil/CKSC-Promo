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
    category: '服飾',
    discount: `1.製圖免費
2.所有品項85折
3.送貨到校免運費`,
    concurrent: false,
    mapUrl: "https://www.google.com/maps/place/408%E8%87%BA%E4%B8%AD%E5%B8%82%E5%8D%97%E5%B1%AF%E5%8D%80%E6%83%A0%E4%B8%AD%E9%87%8C%E6%96%87%E5%BF%83%E8%B7%AF%E4%B8%80%E6%AE%B5378%E8%99%9F16+%E4%B9%8B+3/@24.1494055,120.6468443,72a,75y,268.11h,53.99t/data=!3m7!1e1!3m5!1srSMfMQkQCikeTnOMB9aHyQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D36.013715398315014%26panoid%3DrSMfMQkQCikeTnOMB9aHyQ%26yaw%3D268.11286226925705!7i16384!8i8192!4m13!1m7!3m6!1s0x34693d958a3aba35:0x82f0b7bdcd633d9c!2zNDA46Ie65Lit5biC5Y2X5bGv5Y2A5oOg5Lit6YeM5paH5b-D6Lev5LiA5q61Mzc46JmfMTYg5LmLIDM!3b1!8m2!3d24.1494238!4d120.6470018!3m4!1s0x34693d958a3aba35:0x82f0b7bdcd633d9c!8m2!3d24.1494238!4d120.6470018?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D",
    rule: ''
  },
  {
    name: '人性空間 總店',
    address: '100台北市中正區羅斯福路三段286巷4弄1-1號',
    phone: '0938 957 211',
    category: '其他',
    discount: `1. 平時享有最低價160元
2. 如有使用投影機為170元`,
    mapUrl:
      'https://www.google.com/maps/place/Human+Space+Roosevelt/@25.0180493,121.5327412,17z/data=!3m1!5s0x3442a98b90be04df:0x6e84e240a4fe45a2!4m10!1m2!2m1!1z5Lq65oCn56m66ZaTIOe4veW6lw!3m6!1s0x3442a98b9b1e8b3f:0xfc84591eb30f101d!8m2!3d25.0158629!4d121.5321137!15sChPkurrmgKfnqbrplpMg57i95bqXWhciFeS6uuaApyDnqbrplpMg57i9IOW6l5IBFmZ1bmN0aW9uX3Jvb21fZmFjaWxpdHmaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUmxiVmxtYTJsM1JSQUKqAUsKCy9nLzF0bDdsZHRtEAEyHxABIhvg7HjXiSWC3BpQbj8e9Hkn5PuN5Z68_YQtZgUyGRACIhXkurrmgKcg56m66ZaTIOe4vSDlupfgAQD6AQQIABAX!16s%2Fg%2F1tl7ldtm?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D',
    concurrent: false,
    rule: '',
  },
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
