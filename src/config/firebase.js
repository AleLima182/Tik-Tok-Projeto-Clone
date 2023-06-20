// Import the functions you need from the SDKs you need
import { dbClick } from "@testing-library/user-event/dist/click";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDhTxCG238obskv66CrQLxYgEajAPPeWVk",
  authDomain: "tiktok---jornada-60acf.firebaseapp.com",
  projectId: "tiktok---jornada-60acf",
  storageBucket: "tiktok---jornada-60acf.appspot.com",
  messagingSenderId: "791876684404",
  appId: "1:791876684404:web:d805436b6abab6eaa9df21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;