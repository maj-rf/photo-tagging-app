// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firebaseConfig } from './firebase-config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fetchAnswers(setData) {
  const data = await getDocs(collection(db, 'answers'));
  setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}

export default fetchAnswers;
