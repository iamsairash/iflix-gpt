// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqHmdEdThjHkTTmGWynRXkySeMLZgOkoo",
  authDomain: "iflix-gpt.firebaseapp.com",
  projectId: "iflix-gpt",
  storageBucket: "iflix-gpt.appspot.com",
  messagingSenderId: "268074271919",
  appId: "1:268074271919:web:eea2eb1a9607572a92405a",
  measurementId: "G-M5CG8VFZ47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//it'll use to access firebase in our project 




export const auth = getAuth()