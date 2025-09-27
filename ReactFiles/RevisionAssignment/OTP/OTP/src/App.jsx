import React, { useRef, useState } from "react";

const OtpInput = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text").slice(0, 4);
    if (!/^\d+$/.test(pasteData)) return;

    const newOtp = pasteData.split("").slice(0, 4);
    setOtp(newOtp);

    newOtp.forEach((digit, idx) => {
      inputsRef.current[idx].value = digit;
    });

    inputsRef.current[Math.min(newOtp.length - 1, 3)].focus();
  };

  const clearOtp = () => {
    setOtp(["", "", "", ""]);
    inputsRef.current.forEach((input) => (input.value = ""));
    inputsRef.current[0].focus();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[400px] text-center">
        <h2 className="text-2xl font-bold mb-2">Enter OTP</h2>
        <p className="text-gray-600 mb-6">
          Please enter the 4-digit code sent to your device
        </p>

        <div className="flex justify-center gap-4 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              maxLength={1}
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="w-12 h-12 text-center border-2 rounded-lg text-xl focus:outline-none focus:border-blue-500"
            />
          ))}
        </div>

        <button
          onClick={clearOtp}
          className="text-blue-600 font-medium hover:underline"
        >
          Clear OTP
        </button>
      </div>
    </div>
  );
};

export default OtpInput;
