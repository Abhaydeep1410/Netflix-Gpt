// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBld4ZibKsmOIkgrH4jQVCEMiNSpMFRkHI",
  authDomain: "netflix-gpt-b04af.firebaseapp.com",
  projectId: "netflix-gpt-b04af",
  storageBucket: "netflix-gpt-b04af.firebasestorage.app",
  messagingSenderId: "468073574928",
  appId: "1:468073574928:web:de5f4fcae37503eafe5095",
  measurementId: "G-WPVQJL0LVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();