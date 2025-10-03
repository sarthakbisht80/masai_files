import React from "react";
import { ThemeProvider } from "./context/ThemeConntext";
import ThemeToggleButton from "./Components/ThemeToogleBtn";

function App() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: "100vh", textAlign: "center", paddingTop: "50px" }}>
        <h1>🌗 Theme Toggle Application</h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
