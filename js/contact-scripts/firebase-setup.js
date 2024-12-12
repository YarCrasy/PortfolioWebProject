// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIpWN2HS6fq39owvRn8pDAO7CY-66EXDY",
  authDomain: "testingfirebase-9d845.firebaseapp.com",
  databaseURL: "https://testingfirebase-9d845-default-rtdb.firebaseio.com",
  projectId: "testingfirebase-9d845",
  storageBucket: "testingfirebase-9d845.firebasestorage.app",
  messagingSenderId: "87245875848",
  appId: "1:87245875848:web:745bb45587fb4558034d3d",
  measurementId: "G-NZQ88H6DQR"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default { getDatabase, ref, onValue, push, set };
