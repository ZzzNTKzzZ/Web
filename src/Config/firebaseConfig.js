// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV7EtOyGG8WaNFc-YFeiiEnnluTC9HHgs",
  authDomain: "portlify-2aka6.firebaseapp.com",
  databaseURL: "https://portlify-2aka6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portlify-2aka6",
  storageBucket: "portlify-2aka6.firebasestorage.app",
  messagingSenderId: "843441365570",
  appId: "1:843441365570:web:f440830f0750ba0a9343db",
  measurementId: "G-67JB9WE1CS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();


export default app