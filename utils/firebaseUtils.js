import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYhg9JNJWoetX4zIZ6PDbZw3NiJn2Ko24",
  authDomain: "pre-poker.firebaseapp.com",
  projectId: "pre-poker",
  storageBucket: "pre-poker.appspot.com",
  messagingSenderId: "395920335556",
  appId: "1:395920335556:web:21dba1e28009da1d291f91",
};

// export const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore();

