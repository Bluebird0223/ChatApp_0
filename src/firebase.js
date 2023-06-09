// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getStorage }from 'firebase/storage'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDF7YxnYbtdL80UTxeqiVzqSmEq8jZaLE",
  authDomain: "chat-app-fe8a6.firebaseapp.com",
  projectId: "chat-app-fe8a6",
  storageBucket: "chat-app-fe8a6.appspot.com",
  messagingSenderId: "935646308273",
  appId: "1:935646308273:web:7bee45eaf8e95642847f90",
  measurementId: "G-PR8LJK67KX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth =getAuth()
export const storage= getStorage();
export const db = getFirestore