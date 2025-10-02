import React, { useState, useEffect } from "react";

export default function App() {
  const [batteryLevel, setBatteryLevel] = useState(100); // default full
  const [charging, setCharging] = useState(false);

  useEffect(() => {
    let batteryRef;

    async function fetchBattery() {
      if ("getBattery" in navigator) {
        try {
          batteryRef = await navigator.getBattery();

          // Initial values
          setBatteryLevel(batteryRef.level * 100);
          setCharging(batteryRef.charging);

          // Event listeners
          batteryRef.addEventListener("levelchange", () =>
            setBatteryLevel(batteryRef.level * 100)
          );
          batteryRef.addEventListener("chargingchange", () =>
            setCharging(batteryRef.charging)
          );
        } catch (err) {
          console.error("Battery API not supported:", err);
          mockBattery();
        }
      } else {
        console.warn("Battery API not supported, using mock data.");
        mockBattery();
      }
    }

    // Mock battery (for browsers that don’t support Battery API)
    function mockBattery() {
      let mockLevel = 75;
      setBatteryLevel(mockLevel);
      setCharging(false);

      setInterval(() => {
        mockLevel = Math.max(0, mockLevel - 1);
        setBatteryLevel(mockLevel);
        if (mockLevel <= 20) setCharging(false);
      }, 5000);
    }

    fetchBattery();

    return () => {
      if (batteryRef) {
        batteryRef.removeEventListener("levelchange", () => {});
        batteryRef.removeEventListener("chargingchange", () => {});
      }
    };
  }, []);

  // Decide which icon to show
  let statusIcon = "";
  if (charging) {
    statusIcon = "⚡"; // charging icon
  } else if (batteryLevel <= 20) {
    statusIcon = "🔴"; // warning low battery
  } else {
    statusIcon = "🔋"; // normal battery
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>🔋 Battery Status App</h1>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
          marginTop: "20px",
          textAlign: "center",
          background: "#f9f9f9",
          boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2>
          Battery: {Math.round(batteryLevel)}% {statusIcon}
        </h2>
        <p style={{ fontSize: "18px" }}>
          {charging ? "Charging ⚡" : "Not Charging"}
        </p>
      </div>
    </div>
  );
}
