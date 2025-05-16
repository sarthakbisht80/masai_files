
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyApZ-9ShEYdLUWX18Ij-X_kEC-n38GrqDc",
    authDomain: "auth-ffd8c.firebaseapp.com",
    projectId: "auth-ffd8c",
    storageBucket: "auth-ffd8c.firebasestorage.app",
    messagingSenderId: "210177538931",
    appId: "1:210177538931:web:939ab439742634a3cd2306",
    measurementId: "G-70K8YBQXP6"
  };



  const app = initializeApp(firebaseConfig);
 export const auth =getAuth(app);
 export const db= getFirestore(app);
