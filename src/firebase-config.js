// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY0EsAla0w0bOyvoaZewg1-vQI_iudE1U",
  authDomain: "fir-tutorial-4c29e.firebaseapp.com",
  projectId: "fir-tutorial-4c29e",
  storageBucket: "fir-tutorial-4c29e.appspot.com",
  messagingSenderId: "240635734896",
  appId: "1:240635734896:web:5b881fde3bdb7922ad3db5",
  measurementId: "G-KC1VCGPQH8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const rdb = getDatabase(app);
