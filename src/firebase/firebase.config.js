// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAPlKyOJBItpFPnJ0zO6BhCKe5DSEmogs",
  authDomain: "educational-assignment-ten.firebaseapp.com",
  projectId: "educational-assignment-ten",
  storageBucket: "educational-assignment-ten.appspot.com",
  messagingSenderId: "671170585052",
  appId: "1:671170585052:web:11ddca8f8a71d12eea2f19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;