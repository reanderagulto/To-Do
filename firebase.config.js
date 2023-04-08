// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjz021GcbSL-zViu2ZtI1Orn5D7seJUtI",
  authDomain: "todo-app-3e491.firebaseapp.com",
  databaseURL: "https://todo-app-3e491-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-app-3e491",
  storageBucket: "todo-app-3e491.appspot.com",
  messagingSenderId: "543828130707",
  appId: "1:543828130707:web:99535935fc9dd0dfc20666",
  measurementId: "G-W082CPHRNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);