// src/firebase-config.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK4M0l4GPm6Sw_LTuTt1UA-9c_8c07Y0s",
  authDomain: "todolist-app-bece4.firebaseapp.com",
  projectId: "todolist-app-bece4",
  storageBucket: "todolist-app-bece4.appspot.com",
  messagingSenderId: "813410035714",
  appId: "1:813410035714:web:034f6d42a256d1bbe4df1b",
  measurementId: "G-H8M1NVFCPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export the Firestore database instance
