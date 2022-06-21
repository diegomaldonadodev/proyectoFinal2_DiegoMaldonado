// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkvz8L7-bpJeCc96Er5uuT5b0Qppsh-94",
  authDomain: "ecommerce-coderhouse-c9021.firebaseapp.com",
  projectId: "ecommerce-coderhouse-c9021",
  storageBucket: "ecommerce-coderhouse-c9021.appspot.com",
  messagingSenderId: "165835969735",
  appId: "1:165835969735:web:505fa7abf242cb2f3f5ae2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;