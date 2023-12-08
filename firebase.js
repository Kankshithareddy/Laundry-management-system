// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBpBWjs3mn5UEeWdwjnfKhmApvuxSGeRTU",
  authDomain: "laundry-app-89f2c.firebaseapp.com",
  projectId: "laundry-app-89f2c",
  storageBucket: "laundry-app-89f2c.appspot.com",
  messagingSenderId: "1059477165273",
  appId: "1:1059477165273:web:ee53ca970644aa69be9ac8",
  measurementId: "G-R4M229EGGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const db=getFirestore();

export {auth,db};