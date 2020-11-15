import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWnAA5qTEFlvO4pB-4oCDTYdC_N5JbphE",
    authDomain: "clone-62dab.firebaseapp.com",
    databaseURL: "https://clone-62dab.firebaseio.com",
    projectId: "clone-62dab",
    storageBucket: "clone-62dab.appspot.com",
    messagingSenderId: "31073925069",
    appId: "1:31073925069:web:9cbec0cab76ce15984b684",
    measurementId: "G-MW2F6Z5N81"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
//firestire is the realtime db in firebase
  const db = firebaseApp.firestore();
// variable to handle the sign in   
  const auth = firebase.auth();

  export {db, auth};