import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState(""); 
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("❌ Your browser does not support Speech Recognition. Please use Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;        // keep listening
    recognition.interimResults = true;    // live results
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      let text = "";
      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript + " ";
      }
      setTranscript(text.trim());
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "30px" }}>
      <h1>🗣️ Speech-to-Text App</h1>

      <div style={{ marginBottom: "20px" }}>
        {listening ? (
          <span style={{ fontSize: "24px", color: "red" }}>🔴 Recording...</span>
        ) : (
          <span style={{ fontSize: "24px", color: "green" }}>🟢 Idle</span>
        )}
      </div>

      <button
        onClick={startListening}
        disabled={listening}
        style={{
          background: "green",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Start Recording
      </button>

      <button
        onClick={stopListening}
        disabled={!listening}
        style={{
          background: "red",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Stop Recording
      </button>

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          background: "#f9f9f9",
          minHeight: "100px",
        }}
      >
        <h3>Transcribed Text:</h3>
        <p style={{ fontSize: "18px", color: "#333" }}>
          {transcript || "🎤 Speak something..."}
        </p>
      </div>
    </div>
  );
}
