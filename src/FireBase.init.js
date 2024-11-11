// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpzV8AuO4bkevwMYcIhVZ-M0E4nvR1ZUY",
  authDomain: "simple-login-project-566ba.firebaseapp.com",
  projectId: "simple-login-project-566ba",
  storageBucket: "simple-login-project-566ba.firebasestorage.app",
  messagingSenderId: "1001858252427",
  appId: "1:1001858252427:web:79360ea8d3e24391d51e8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)