
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAh42UWGwBQc0e-igeGmwAg0XWhV756-Qg",
    authDomain: "stubbingmytoe-8d890.firebaseapp.com",
    projectId: "stubbingmytoe-8d890",
    storageBucket: "stubbingmytoe-8d890.appspot.com",
    messagingSenderId: "42859013778",
    appId: "1:42859013778:web:47d266db2750c6f15e284b",
    measurementId: "G-GFH0HQ81SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);