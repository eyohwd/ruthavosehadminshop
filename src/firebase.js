// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASEKEY,
  authDomain: "shoperpointe.firebaseapp.com",
  projectId: "shoperpointe",
  storageBucket: "shoperpointe.appspot.com",
  messagingSenderId: "878254901832",
  appId: "1:878254901832:web:0fd316f20bc069ebe6267d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;