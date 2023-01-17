import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

export const auth = getAuth(app);
export default app;
