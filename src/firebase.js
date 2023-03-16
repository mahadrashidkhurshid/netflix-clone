// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase/app";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYywhrLZSaC6-78RKLgbwNIEfontOEi4M",
    authDomain: "netflix-clone-f3817.firebaseapp.com",
    projectId: "netflix-clone-f3817",
    storageBucket: "netflix-clone-f3817.appspot.com",
    messagingSenderId: "94569522497",
    appId: "1:94569522497:web:a22087e5309034c1af6dc0",
    measurementId: "G-221EVWJ5YT"
  };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {auth, createUserWithEmailAndPassword, onAuthStateChanged};
export default db;