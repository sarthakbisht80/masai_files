// src/AuthContext/AuthContext.jsx
import React, { createContext, useState } from "react";

// 1️⃣ Create the context
export const AuthContext = createContext();

// 2️⃣ Create the provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const handleLogin = (newToken) => setToken(newToken);
  const handleLogout = () => setToken(null);

  return (
    <AuthContext.Provider value={{ token, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
