// Import the functions you need from the SDKs you need
import "firebase/database"
import firebase from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPUGI3F51TxdSydY0O-vDGKR8vYtG2Utk",
    authDomain: "blog-app-379ed.firebaseapp.com",
    projectId: "blog-app-379ed",
    storageBucket: "blog-app-379ed.appspot.com",
    messagingSenderId: "42874279201",
    databaseURL: "https://blog-app-379ed-default-rtdb.firebaseio.com",
    appId: "1:42874279201:web:1c6a65b9bddebfa1f29a60",
    measurementId: "G-84FDC7R2D4"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const GoogleProvider = new firebase.auth.GoogleAuthProvider()

export {database as default,firebase,GoogleProvider}