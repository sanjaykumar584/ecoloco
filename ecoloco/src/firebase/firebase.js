// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRLss48wqJ5Y7vU_T4K5C95Z7T-fWam4c",
  authDomain: "travel-planner-7b689.firebaseapp.com",
  projectId: "travel-planner-7b689",
  storageBucket: "travel-planner-7b689.firebasestorage.app",
  messagingSenderId: "832375300026",
  appId: "1:832375300026:web:69b8c9a9daeb3db1e60783",
  measurementId: "G-FE4ZYCQLZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth, analytics }