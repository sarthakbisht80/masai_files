import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { AuthContext } from '../src/Context/authContext';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/authApi';

const [username,Setusername]=useState("");
const [password,SetPassword]= useState("");
const [error,SetError]= useState("");
const [loading,SetLoading]= useState(false);

const {login}= useContext(AuthContext);

const navigate= useNavigate();
const handleSubmit=async(e)=>{
    e.preventDefault();
    if(username|| !password){
        SetError("both feild req");
return;
    }
    try {
        SetLoading(true);
        const res= await loginUser({username,password});
        const token= res.data.token;
        login(token);
        navigate("/dashboard");

    } catch (error) {
        SetError("invalid cred");
    }
    finally{
        SetLoading(false);
    }
}
const Login = () => {
  return (
 <>
 <h2>Login</h2>
 <form onSubmit={handleSubmit}>

    <input type="text" placeholder='enter name' 
    onChange={(e)=>Setusername(e.target.value)} />
    <input type="text" placeholder='eneter pass' 
    onChange={(e)=>SetPassword(e.target.value)} />
    {error && <p >{error}</p>}

    <button>
        {loading ?"login in..":"loggin"}
    </button>
 </form>
 </>
  )
}

export default Login