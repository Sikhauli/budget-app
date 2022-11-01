// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}  from "firebase/auth";

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  // apiKey: "AIzaSyC2InVxlp_AlD2rX72bJ4AWmA0QbX_R7t8",
  // authDomain: "budget-app-56eba.firebaseapp.com",
  // projectId: "budget-app-56eba",
  // storageBucket: "budget-app-56eba.appspot.com",
  // messagingSenderId: "485577545882",
  // appId: "1:485577545882:web:cdf26d80cebc729f902723",
  // measurementId: "G-PWH6YPFEHW"

  apiKey: "AIzaSyCGMgx68rbGkGaX1RJ7Qn7WI4-fathNiOw",
  authDomain: "budget-app-b9b47.firebaseapp.com",
  projectId: "budget-app-b9b47",
  storageBucket: "budget-app-b9b47.appspot.com",
  messagingSenderId: "25383016596",
  appId: "1:25383016596:web:18ed72a782d05f0ae47c81",
  measurementId: "G-N55M3HEN68"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

const db=getFirestore(app)
const analytics = getAnalytics(app);

export {auth,db};