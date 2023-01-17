// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrH3Kd3GLNhYaeAC5h3JstOkqwoYd4rf8",
  authDomain: "food-recommendations-1b444.firebaseapp.com",
  projectId: "food-recommendations-1b444",
  storageBucket: "food-recommendations-1b444.appspot.com",
  messagingSenderId: "1099010595335",
  appId: "1:1099010595335:web:6893b8449ceb90dd0ee8a2",
  measurementId: "G-Z0P80B3KFK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
