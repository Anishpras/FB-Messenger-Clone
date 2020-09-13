import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdVFVN8oIxb_9PolrZ4FgoDvK8FcG5CO4",
    authDomain: "facebook-messenger-clone-e0283.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-e0283.firebaseio.com",
    projectId: "facebook-messenger-clone-e0283",
    storageBucket: "facebook-messenger-clone-e0283.appspot.com",
    messagingSenderId: "46286604305",
    appId: "1:46286604305:web:8751f90597abd35a37c9b0",
    measurementId: "G-GQR8S8DZHC"
});


const db = firebaseApp.firestore();

export default db;
