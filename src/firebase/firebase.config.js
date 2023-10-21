// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbyrYX9r0zoMEqcDIMriW_Uc2e0y6Lcpw",
  authDomain: "ass-10-client-side.firebaseapp.com",
  projectId: "ass-10-client-side",
  storageBucket: "ass-10-client-side.appspot.com",
  messagingSenderId: "912427920926",
  appId: "1:912427920926:web:bfe29101cf8db42470c80f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;