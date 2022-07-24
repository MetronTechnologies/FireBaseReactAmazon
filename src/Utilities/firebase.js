// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
// import {getFirestore} from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDta9Ir4j5tqlN2j0Wsm85I63EevBPXFIQ",
    authDomain: "client-9ad79.firebaseapp.com",
    projectId: "client-9ad79",
    storageBucket: "client-9ad79.appspot.com",
    messagingSenderId: "1014711425227",
    appId: "1:1014711425227:web:8e14625b80e126a3a4e34e"
};

const firebaseApp = firebase.initializeApp((firebaseConfig));
const db = firebaseApp.firestore();
const auth =firebase.auth();


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);



export {auth, db}

