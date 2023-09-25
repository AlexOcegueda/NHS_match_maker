// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore'; // Import Firestore if you need it
import 'firebase/auth'; // Import Authentication if you need it

const firebaseConfig = {

  apiKey: "AIzaSyCiJMhvZR-12FvCcHG9A4OI19nFz-2zScA",

  authDomain: "nhsmatch.firebaseapp.com",

  projectId: "nhsmatch",

  storageBucket: "nhsmatch.appspot.com",

  messagingSenderId: "88320039181",

  appId: "1:88320039181:web:ad2253ffd4dc236795b844",

  measurementId: "G-0XTM9FNCD1"

};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
