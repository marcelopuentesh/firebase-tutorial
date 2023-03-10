// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "@firebase/database";
import { getAuth } from "firebase/auth";

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
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const rdb = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

export default firebaseApp;
