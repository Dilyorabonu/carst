import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKXXbTtTScogZdDSCML8xVnCzmpetZDU8",
  authDomain: "carstore-96e17.firebaseapp.com",
  projectId: "carstore-96e17",
  storageBucket: "carstore-96e17.appspot.com",
  messagingSenderId: "723612669969",
  appId: "1:723612669969:web:3b002b6f393dc97633f9b0",
  measurementId: "G-ZF2WK95J0Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);

// db
export const db = getFirestore(app);
