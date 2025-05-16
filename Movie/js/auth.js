import { auth,db } from "../firebase-Config.js";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut}from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
 import {doc,
     getDoc,
     setDoc} 
    from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";
    
 document.addEventListener('DOMContentLoaded',()=>{
    const loginBtn= document.getElementById('login-btn');
    const signupBtn= document.getElementById('signup-btn');
    const logoutBtn= document.getElementById('logout-btn');
if(loginBtn) {
    loginBtn.addEventListener('click',async()=>{
        const email =document.getElementById('login-email').value;
        const passward= document.getElementById('login-pass').value;

        try{
            await signInWithEmailAndPassword(auth,email,passward);
            //redirect user to dashboard page
            window.open("movie.html","_blank");
        }
        catch(error){   
            document.getElementById('login-msg').innerText= error.message; 

        }
    })
} 
if(signupBtn){
    signupBtn.addEventListener('click',async()=>{
         const email =document.getElementById('signup-enail').value;
        const passward= document.getElementById('signup-passward').value;
        const role =document.getElementById('role').value;
        try {
            const userCredentials= await createUserWithEmailAndPassword(
                auth,
                email,
                passward);
            await setDoc(doc(db,"users",userCredentials.user.uid));
            window.location.href="index.html";
        } catch (error) {
            document.getElementById('signup-message').innerText=error.message;
            console.log(error.message);
        }
    })
}
if(logoutBtn){
    logoutBtn.addEventListener('click',async()=>{
        await signOut(auth);
        window.location.href="index.html";
    })
}
}) 
