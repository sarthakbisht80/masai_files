import React from "react";

import { useSelector,useDispatch } from "react-redux";

import { Login,Logout } from "../redux/actions/authAction";

export default function Auth(){
   const isAuthenticated= useSelector((state)=>state.auth.isAuthenticated);
  const dispatch= useDispatch();
   return(

        <>
        <h2>{isAuthenticated ? "Logged-In":"Logged-out"}</h2> 
        {isAuthenticated ? (<button onClick={()=>dispatch(Logout())} >Logout</button>): (<button onClick={()=>dispatch(Login())} >Login</button>)}
            </>
    )
}