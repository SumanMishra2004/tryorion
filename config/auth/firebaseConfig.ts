// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5lZsASHEAuPZbrYgiQk2BtbvzzzyIJF8",
  authDomain: "drivebaraze.firebaseapp.com",
  projectId: "drivebaraze",
  storageBucket: "drivebaraze.appspot.com",
  messagingSenderId: "307201395991",
  appId: "1:307201395991:web:1998bceffed7840ab47b52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app