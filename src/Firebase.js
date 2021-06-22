import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDLUYjFUrMOgGAYXWrTly9kgLLeZnVONZY",
  authDomain: "todo-app-cp-25170.firebaseapp.com",
  projectId: "todo-app-cp-25170",
  storageBucket: "todo-app-cp-25170.appspot.com",
  messagingSenderId: "885773497826",
  appId: "1:885773497826:web:2b767f4f4cdaa3d60db5bb",
  measurementId: "G-HKJX55HT4Y"
});

const db = firebaseApp.firestore();

export default db;