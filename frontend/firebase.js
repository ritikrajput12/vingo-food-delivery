// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "vingo-food-delivery-5fd03.firebaseapp.com",
  projectId: "vingo-food-delivery-5fd03",
  storageBucket: "vingo-food-delivery-5fd03.firebasestorage.app",
  messagingSenderId: "956471456815",
  appId: "1:956471456815:web:37f25b79376d606f6382da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}