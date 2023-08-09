import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAKKp9hVG1Qa2nUkIGmF9EClNaJO7Ci7kA",
  authDomain: "pizza-store-abb3c.firebaseapp.com",
  projectId: "pizza-store-abb3c",
  storageBucket: "pizza-store-abb3c.appspot.com",
  messagingSenderId: "508922081993",
  appId: "1:508922081993:web:fc9a24c6ceb8c986bd5318",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
