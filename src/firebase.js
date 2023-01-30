// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXFcRbb3qV4ncu3FNB5wn8aN81r4Tppko",
  authDomain: "fir-auth-3b091.firebaseapp.com",
  projectId: "fir-auth-3b091",
  storageBucket: "fir-auth-3b091.appspot.com",
  messagingSenderId: "1009742155910",
  appId: "1:1009742155910:web:0a3930b7bf84c4d0c80107"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);
