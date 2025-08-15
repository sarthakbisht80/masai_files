import React from "react";
import OnlineStatusIndicator from "./Component/OnlineStatus";

export default function App() {
  return (
    <div>
      
      <OnlineStatusIndicator />

      {/* Demo content */}
      <div style={{ padding: "40px", fontFamily: "Arial"}}>
        <h1> Network Status Detection </h1>
        <p>
          Open/Close your internet connection to see the status indicator in real-time.
        </p>
      </div>
    </div>
  );
}
