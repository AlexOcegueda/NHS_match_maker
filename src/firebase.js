// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiJMhvZR-12FvCcHG9A4OI19nFz-2zScA",
  authDomain: "nhsmatch.firebaseapp.com",
  databaseURL: "https://nhsmatch-default-rtdb.firebaseio.com",
  projectId: "nhsmatch",
  storageBucket: "nhsmatch.appspot.com",
  messagingSenderId: "88320039181",
  appId: "1:88320039181:web:ad2253ffd4dc236795b844",
  measurementId: "G-0XTM9FNCD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

module.exports = firebaseConfig;