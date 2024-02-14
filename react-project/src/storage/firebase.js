// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbXIgAW78vTfpGHZpSMaHrJDsadccAG5E",
  authDomain: "bidsbattles.firebaseapp.com",
  projectId: "bidsbattles",
  storageBucket: "bidsbattles.appspot.com",
  messagingSenderId: "903700356596",
  appId: "1:903700356596:web:46f8f01017ed981c4fada1",
  measurementId: "G-3T2BLC7LJ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
