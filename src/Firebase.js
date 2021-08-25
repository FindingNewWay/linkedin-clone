import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBrDn4iLbaWfhedKfx9Mqk5RU_Tx4Bs8oY",
  authDomain: "linkedin-clone-7aa11.firebaseapp.com",
  projectId: "linkedin-clone-7aa11",
  storageBucket: "linkedin-clone-7aa11.appspot.com",
  messagingSenderId: "82261513771",
  appId: "1:82261513771:web:dfd5d1da85c81cab18bc6e",
  measurementId: "G-QGEEX9LCJ9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
