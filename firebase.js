import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAta13HLgDPlIqHrSyO7TXuEmKM5hqHy7w',
  authDomain: 'ck-tfg-promo.firebaseapp.com',
  projectId: 'ck-tfg-promo',
  storageBucket: 'ck-tfg-promo.firebasestorage.app',
  messagingSenderId: '822381626331',
  appId: '1:822381626331:web:3c629cb9cac3f8d040ddfe',
  measurementId: 'G-N1P86S2FL9',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
