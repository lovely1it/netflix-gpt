// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcSuzV2LFoalxH7bea43AXP5DtvwK8luM",
  authDomain: "netflixgpt-f4699.firebaseapp.com",
  projectId: "netflixgpt-f4699",
  storageBucket: "netflixgpt-f4699.appspot.com",
  messagingSenderId: "223137010952",
  appId: "1:223137010952:web:b1e99b55b78d22ebcb48bd",
  measurementId: "G-9V25S3R3FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
