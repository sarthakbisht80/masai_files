// src/components/MessagesList.jsx
import React from "react";
import Message from "./Message";
import "./MessageList.css";

export const MessagesList = React.memo(({ messages, users, currentUserId }) => (
  <div className="messages-list">
    {messages.map(msg => {
      const sender = users.find(u => u.id === msg.senderId);
      return (
        <Message
          key={msg.id}
          message={msg}
          sender={sender}
          currentUserId={currentUserId}
        />
      );
    })}
  </div>
));
