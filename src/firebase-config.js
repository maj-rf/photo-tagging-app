// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAezfTP8a3oDWd5Ti2Z8f_afpPNLjFWfO4',
  authDomain: 'photo-tagging-app-1fd39.firebaseapp.com',
  projectId: 'photo-tagging-app-1fd39',
  storageBucket: 'photo-tagging-app-1fd39.appspot.com',
  messagingSenderId: '943927763672',
  appId: '1:943927763672:web:a551555602abcf2e6d6dad',
  measurementId: 'G-QP5F1F2QKG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
