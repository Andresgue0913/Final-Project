// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbZIjvdACEV161DeOnzIm89ITDEgYJIyY",
  authDomain: "whatsapp-application-717d6.firebaseapp.com",
  projectId: "whatsapp-application-717d6",
  storageBucket: "whatsapp-application-717d6.appspot.com",
  messagingSenderId: "257692926217",
  appId: "1:257692926217:web:f6d3fdf318dc73d8d253d8",
  measurementId: "G-8PXLKNYB4D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
