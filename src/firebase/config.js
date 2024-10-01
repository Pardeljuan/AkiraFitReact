import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC7iMbsx86L-49DAwSS5pnrpkQeL_4PWH0",
  authDomain: "akirafit44.firebaseapp.com",
  projectId: "akirafit44",
  storageBucket: "akirafit44.appspot.com",
  messagingSenderId: "541154952687",
  appId: "1:541154952687:web:e19e45e673dcc8b290a21a",
  measurementId: "G-Y6FQ6K9ERZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);