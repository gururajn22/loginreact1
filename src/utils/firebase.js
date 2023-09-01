// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLU7cHaX1f_FgmqrMqrdwuHnhC4RcMb1c",
  authDomain: "loginreact-8206d.firebaseapp.com",
  projectId: "loginreact-8206d",
  storageBucket: "loginreact-8206d.appspot.com",
  messagingSenderId: "125828624446",
  appId: "1:125828624446:web:a518628bf385bcfad7a16f",
  measurementId: "G-3XPTR44C9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();