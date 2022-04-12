// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtNYdjZz7eJmcHcyd5ngD9s350DWeiuBA",
  authDomain: "ema-jhon-auth-59.firebaseapp.com",
  projectId: "ema-jhon-auth-59",
  storageBucket: "ema-jhon-auth-59.appspot.com",
  messagingSenderId: "15711150405",
  appId: "1:15711150405:web:76ceba724245e5ec7dde2c",
  measurementId: "G-YKNT5T58QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export default auth