
import { createContext, useEffect, useState } from "react";
import API from "../api/axios";

export const AuthContext= createContext();


export const AuthProvider=({children})=>{
    const [user,setUser]= useState(()=>{
        const u= localStorage.getItem('user');
        return u ? JSON.parse(u):null;
    });

    useEffect(()=>{
        if(user) localStorage.setItem("user",JSON.stringify(user));
        else localStorage.removeItem("user");

    },[user]);

    const login= (token, userData)=>{
        localStorage.setItem('token',token);
        setUser(userData);
    }
    const logout= ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);

    }
    return (
        <AuthContext.Provider value={{user,login,logout}}>
        {children}
        </AuthContext.Provider>
    );
}