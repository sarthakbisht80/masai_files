import React, { useState } from "react";

export default function App() {
  const [speedStatus, setSpeedStatus] = useState(null); // "Fast" | "Slow"
  const [icon, setIcon] = useState("");
  const [loading, setLoading] = useState(false);

  const checkSpeed = async () => {
    setLoading(true);
    setSpeedStatus(null);
    setIcon("");

    try {
      const url = "https://via.placeholder.com/200"; // small image (200x200)
      const startTime = performance.now();

      await fetch(url, { cache: "no-cache" }); // avoid browser cache
      const endTime = performance.now();

      const duration = (endTime - startTime) / 1000; // in seconds
      console.log("Load time:", duration, "s");

      if (duration <= 1.5) {
        setSpeedStatus("Fast");
        setIcon("🚀");
      } else {
        setSpeedStatus("Slow");
        setIcon("🐢");
      }
    } catch (err) {
      console.error("Error checking speed:", err);
      setSpeedStatus("Error");
    }

    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "30px" }}>
      <h1>🌐 Network Speed Checker</h1>

      <button
        onClick={checkSpeed}
        disabled={loading}
        style={{
          background: "#007bff",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        {loading ? "Checking..." : "Check Speed"}
      </button>

      {speedStatus && (
        <div
          style={{
            marginTop: "30px",
            fontSize: "24px",
            fontWeight: "bold",
            color: speedStatus === "Fast" ? "green" : "red",
          }}
        >
          {icon} Network is {speedStatus}
        </div>
      )}
    </div>
  );
}
