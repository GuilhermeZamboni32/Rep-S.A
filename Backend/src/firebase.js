// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAhXagLN8GHHauHVHdRfsYsVnBm5e9XfU",
  authDomain: "vidafit-c410e.firebaseapp.com",
  projectId: "vidafit-c410e",
  storageBucket: "vidafit-c410e.firebasestorage.app",
  messagingSenderId: "609965797682",
  appId: "1:609965797682:web:cde455ca381655af67e72b",
  measurementId: "G-CNTEC56ECE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics}