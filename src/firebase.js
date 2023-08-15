// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa79p3t-KRoIDgqJhPCfvN7_m6hoAI5Gg",
  authDomain: "clone-87daf.firebaseapp.com",
  projectId: "clone-87daf",
  storageBucket: "clone-87daf.appspot.com",
  messagingSenderId: "665765884991",
  appId: "1:665765884991:web:cd26af872fc517cad0f48a",
  measurementId: "G-H7BYTNFVTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);