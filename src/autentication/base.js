// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz8qPMeVV7QC7DIHq27CmrnsMr24XvSXU",
  authDomain: "balsa-project.firebaseapp.com",
  projectId: "balsa-project",
  storageBucket: "balsa-project.appspot.com",
  messagingSenderId: "1096413393430",
  appId: "1:1096413393430:web:8255cf2e90c539e9a67b37",
  measurementId: "G-60X1DF8BYN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
