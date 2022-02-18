// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { firebaseConfig } from './firebase-config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fetchAnswers(setData) {
  const data = await getDocs(collection(db, 'answers'));
  setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}

async function fetchUsers(setData) {
  let currentArr = [];
  const data = await getDocs(collection(db, 'user'));
  currentArr = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  let sorted = currentArr.sort((a, b) => {
    return a.timeEnd - a.timeStart - (b.timeEnd - b.timeStart);
  });
  currentArr = sorted.slice(0, 10);
  setData(currentArr);
}

async function submitUser(name, start, end) {
  await addDoc(collection(db, 'user'), {
    name: name,
    timeStart: start,
    timeEnd: end,
  });
}

export { fetchAnswers, fetchUsers, submitUser };
