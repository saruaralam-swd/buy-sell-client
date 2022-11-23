// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-i5mKL0IZwsR5s2Rfj8KnOhZZUkhtzu4",
  authDomain: "buy-cell--web.firebaseapp.com",
  projectId: "buy-cell--web",
  storageBucket: "buy-cell--web.appspot.com",
  messagingSenderId: "883485059167",
  appId: "1:883485059167:web:6aee4388659309429193ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;