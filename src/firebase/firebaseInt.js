// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHUGsJq80P6jVPlEV1chluRZ0EJl8Kq9o",
  authDomain: "wbbook-52d6d.firebaseapp.com",
  projectId: "wbbook-52d6d",
  storageBucket: "wbbook-52d6d.appspot.com",
  messagingSenderId: "898705169026",
  appId: "1:898705169026:web:2732c010be1a99d536729b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
