import React from "react";
import { useTheme } from "../context/ThemeConntext";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeToggleButton;
