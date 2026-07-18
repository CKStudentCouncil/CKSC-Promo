// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAta13HLgDPlIqHrSyO7TXuEmKM5hqHy7w',
  authDomain: 'ck-tfg-promo.firebaseapp.com',
  projectId: 'ck-tfg-promo',
  storageBucket: 'ck-tfg-promo.firebasestorage.app',
  messagingSenderId: '822381626331',
  appId: '1:822381626331:web:3c629cb9cac3f8d040ddfe',
  measurementId: 'G-N1P86S2FL9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
