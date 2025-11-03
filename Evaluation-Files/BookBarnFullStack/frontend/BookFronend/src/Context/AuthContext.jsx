import { createContext, useState } from "react";


export const AuthContext=createContext();

export function AuthProvider({children})
{
const [user,setUser]= useState(null);

    useeffect(()=>{
        const token= localStorage.getItem("token");
        if(!token ){
            try {
                
                const decoded= jwtDecode(token);
                setUser({...decoded});
            } catch (error) {
                localStorage.removeItem("token");
            }
        }
    },[]);

    const login = (token)=>{
         localStorage.setItem("token",token);
        try {
            
            const decoded= jwtDecode(token);
            setUser({...decoded});

        } catch (error) {
            setUser(null);

        }
    }
    const logout=()=>{
        localStorage.removeItem("token");
        setUser(null);

    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>

    
    );
}