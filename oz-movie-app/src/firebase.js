// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8zy9djvzpdR7YeKycPy2tmn2JVUdUqoo",
  authDomain: "react-movie-app-uplee.firebaseapp.com",
  projectId: "react-movie-app-uplee",
  storageBucket: "react-movie-app-uplee.appspot.com",
  messagingSenderId: "749115178908",
  appId: "1:749115178908:web:255ed6cbc80b53c0899259"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app, auth, provider};