// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCVGCFvU4PH4Q35exCpcXy-AkYCVrARXo",
  authDomain: "vgutest2.firebaseapp.com",
  projectId: "vgutest2",
  storageBucket: "vgutest2.firebasestorage.app",
  messagingSenderId: "1042975775580",
  appId: "1:1042975775580:web:3dbd4ce4af6aac21b6ff99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);