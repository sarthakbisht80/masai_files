import React, { useEffect, useState } from "react";

export default function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine); // js property to chek if browser conceted or not to internt
  
  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
//cleanup fn for compononet is unmounted or rerendered
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return (
    <div>
      {/* Online/Offline Signal */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          width: "20px",
          height: "20px",
          borderRadius: "60%",
          backgroundColor: isOnline ? "green" : "red",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        }}
        title={isOnline ? "Online" : "Offline"}
      ></div>

      {/* Demo content */}
      <div style={{ padding: "40px" }}>
        <h1>Network Status Detection</h1>
        <p>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
      </div>
    </div>
  );
}
