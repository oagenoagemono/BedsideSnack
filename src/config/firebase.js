// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPrP7nPYRnDgwfDRoJ-tsqzAREMeXJQJE",
  authDomain: "studied-point-387117.firebaseapp.com",
  projectId: "studied-point-387117",
  storageBucket: "studied-point-387117.appspot.com",
  messagingSenderId: "577496430389",
  appId: "1:577496430389:web:00e03f84916f40c360be7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(firebaseConfig);