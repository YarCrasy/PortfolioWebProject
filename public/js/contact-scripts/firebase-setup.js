// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUQapcxZOy_b3KNUvKFx2ULfNHIfkOO5A",
  authDomain: "portfoliowebproject-1a652.firebaseapp.com",
  databaseURL: "https://portfoliowebproject-1a652-default-rtdb.firebaseio.com",
  projectId: "portfoliowebproject-1a652",
  storageBucket: "portfoliowebproject-1a652.firebasestorage.app",
  messagingSenderId: "130832923414",
  appId: "1:130832923414:web:96e70e80777192ca162e37",
  measurementId: "G-KRHFYER26D"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default { getDatabase, ref, onValue, push, set };
