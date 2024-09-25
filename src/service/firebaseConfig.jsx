// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getFirebase } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ4O8Y2AXwIblae4g_oDSrL3CQbzh0u_c",
  authDomain: "trip-planner-6a377.firebaseapp.com",
  projectId: "trip-planner-6a377",
  storageBucket: "trip-planner-6a377.appspot.com",
  messagingSenderId: "851951632944",
  appId: "1:851951632944:web:3754243411e7bd0c79a3f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);