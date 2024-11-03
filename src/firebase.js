// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXgRVuhmq6_wf-CktMxUFEJt-DVXB7U_g",
  authDomain: "thoughtrecord-1d53e.firebaseapp.com",
  projectId: "thoughtrecord-1d53e",
  storageBucket: "thoughtrecord-1d53e.appspot.com",
  messagingSenderId: "552936832821",
  appId: "1:552936832821:web:e696a1689f14791c76567c",
  measurementId: "G-JH22JCYZS0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
