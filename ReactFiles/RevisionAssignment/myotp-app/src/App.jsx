import React from "react";
import OTPInput from "./components/OTPInput";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1>Enter OTP</h1>
      <OTPInput />
    </div>
  );
};

export default App;
