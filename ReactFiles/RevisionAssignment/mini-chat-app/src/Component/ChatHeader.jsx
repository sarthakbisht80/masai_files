
import React from "react";
import "./ChatHeader.css";

export const ChatHeader = React.memo(({ participants }) => (
  <div className="chat-header">
    <h2 style={{
      color:"black"
    }}>Chat ({participants.length} participants)</h2>
  </div>
));
