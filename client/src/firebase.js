// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "smarthouse-99be3.firebaseapp.com",
  projectId: "smarthouse-99be3",
  storageBucket: "smarthouse-99be3.firebasestorage.app",
  messagingSenderId: "412953674867",
  appId: "1:412953674867:web:7f80d5ed1f3cbd1a35d606"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);