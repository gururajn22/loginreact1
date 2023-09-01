import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLU7cHaX1f_FgmqrMqrdwuHnhC4RcMb1c",
  authDomain: "loginreact-8206d.firebaseapp.com",
  projectId: "loginreact-8206d",
  storageBucket: "loginreact-8206d.appspot.com",
  messagingSenderId: "125828624446",
  appId: "1:125828624446:web:a518628bf385bcfad7a16f",
  measurementId: "G-3XPTR44C9Y",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
