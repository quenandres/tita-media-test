// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_EUrHokfMelOG181m0Hbmbxwr3LWvdto",
  authDomain: "titamediatest.firebaseapp.com",
  projectId: "titamediatest",
  storageBucket: "titamediatest.appspot.com",
  messagingSenderId: "106406064702",
  appId: "1:106406064702:web:9ad5d06c690a25762d976f",
  measurementId: "G-YR05FG25E4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
