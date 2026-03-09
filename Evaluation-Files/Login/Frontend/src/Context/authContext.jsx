import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { getToken,setToken,removeToken } from '../../utils/auth';
export const AuthContext = createContext();

export const AuthProvider=({children})=>{
    const [token,setAuthToken]=useState(getToken());
    const login= (token)=>{
        setToken(token);
        setAuthToken(token);
    };
    const logout=()=>{
        removeToken();
        setAuthToken(null);
    }
    return(
        <AuthContext.Provider value={{token,
            login,logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
