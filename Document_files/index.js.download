// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js'
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPWv_kvAW7dIdQqbWXmp2xyEkC3ZLvX3M",
  authDomain: "naturalnurturer-6302c.firebaseapp.com",
  projectId: "naturalnurturer-6302c",
  storageBucket: "naturalnurturer-6302c.appspot.com",
  messagingSenderId: "371899014475",
  appId: "1:371899014475:web:7b31217582417d3b3bdcce",
  measurementId: "G-E2LV7VK079",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const form = document.querySelector("form")
const mail = document.querySelector("#one")
const pswd = document.querySelector("#two")
form.addEventListener("submit",function input(e){ 
    e.preventDefault()
    //console.log(mail.value)
    //console.log(pswd.value)
    createUserWithEmailAndPassword(auth, mail.value, pswd.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})