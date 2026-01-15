import React from 'react'
import { useState } from 'react'
import { loginUser } from '../services/authServices';
const UserAuth = () => {
 
        const [email,setEmail]= useState("");
        const [password,setPassword]= useState("");
        const [token,setToken]= useState("");
        const [error,setError]= useState("");

        const handleLogin= async (e)=>{
            e.preventDefault();
            setError("");
            setToken("");
            try {
                const data= await loginUser(email,password);
                console.log(data.token);
                setToken(data.token);

            } catch (error) {
                setError(error.message);
            }
            
        }
    return (
    
        <>
        <h2>Login </h2>
            <form action="" onSubmit={handleLogin}>
                
                <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email' />
            
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter passowrd' />

                <button >Login</button>
                <div style={{ 
                   border:"solid red "
                }}>

                {token &&  <p style={{
                    color:"green"
                }}>Token:{token}</p>}
                
                {error && <p style={{color:"red"}} >{error}</p>}
                </div>
            </form>
        
    </>
  )
}

export default UserAuth
