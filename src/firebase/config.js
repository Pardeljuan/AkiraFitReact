import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyA1woLZtDIrQh7GBkRhR3uUQZF5J7fZ1TU',
  authDomain: 'akirafitind.firebaseapp.com',
  projectId: 'akirafitind',
  storageBucket: 'akirafitind.appspot.com',
  messagingSenderId: 779826621669,
  appId: '1:779826621669:web:4aaba5857927a2ba44b80c',
 
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)