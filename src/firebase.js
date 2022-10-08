// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP6LAMgqNbIVnSmjXQtydzzwAFZPufhqw",
  authDomain: "xseedshackfest.firebaseapp.com",
  projectId: "xseedshackfest",
  storageBucket: "xseedshackfest.appspot.com",
  messagingSenderId: "505980064396",
  appId: "1:505980064396:web:0ae3df07c79cc2f91fa1a9",
  measurementId: "G-55L22D53YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);