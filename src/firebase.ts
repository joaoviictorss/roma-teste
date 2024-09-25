// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8dYmHl66_9BVCap0jdXK4P1jMxlFx8Jc",
  authDomain: "teste-login-8494a.firebaseapp.com",
  projectId: "teste-login-8494a",
  storageBucket: "teste-login-8494a.appspot.com",
  messagingSenderId: "927433079509",
  appId: "1:927433079509:web:afba24f2db5dc50daf005c",
  measurementId: "G-N5H2YQ7MJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default auth;