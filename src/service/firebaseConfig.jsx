// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf57QGHBTDt4Z2si6uYDWCKNtCZIpNfDQ",
  authDomain: "ai-travel-planner-2ab6c.firebaseapp.com",
  projectId: "ai-travel-planner-2ab6c",
  storageBucket: "ai-travel-planner-2ab6c.firebasestorage.app",
  messagingSenderId: "940421825687",
  appId: "1:940421825687:web:51a30ae7f41df97be315d2",
  measurementId: "G-8D09D9VWLF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
// import { getAnalytics } from "firebase/analytics";
