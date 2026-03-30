// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGpZLwmfhlEKtS_lw5ZAtXopZHoKiQkRs",
  authDomain: "movienote-26bad.firebaseapp.com",
  projectId: "movienote-26bad",
  storageBucket: "movienote-26bad.firebasestorage.app",
  messagingSenderId: "685867573789",
  appId: "1:685867573789:web:410f8c2b9b0829b96d5cf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);