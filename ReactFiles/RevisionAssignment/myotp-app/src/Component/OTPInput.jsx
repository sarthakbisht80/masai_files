import React, { useRef } from "react";

const OTPInput = () => {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      e.target.value = value; // allow only 1 digit
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    } else {
      e.target.value = ""; // clear invalid input
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (e.target.value === "") {
        if (index > 0) {
          inputsRef.current[index - 1].focus();
        }
      } else {
        e.target.value = "";
      }
      e.preventDefault();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "");
    for (let i = 0; i < inputsRef.current.length; i++) {
      if (i < pasteData.length) {
        inputsRef.current[i].value = pasteData[i];
      }
    }
    const nextIndex = Math.min(pasteData.length, inputsRef.current.length - 1);
    inputsRef.current[nextIndex].focus();
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {[0, 1, 2, 3].map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          ref={(el) => (inputsRef.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          style={{
            width: "50px",
            height: "50px",
            fontSize: "24px",
            textAlign: "center",
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
