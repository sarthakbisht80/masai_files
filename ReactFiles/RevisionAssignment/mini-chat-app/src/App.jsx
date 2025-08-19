// src/App.jsx
import React, { useState, useCallback, useRef, useEffect } from "react";
import { users as initialUsers, messages as initialMessages } from "./data/dummyData";
import { ActiveUsers } from "./Component/ActiveUsers";
import { MessagesList } from "./Component/MessageList";
import { ChatHeader } from "./Component/ChatHeader";
import "./App.css";

function App() {
  const [users] = useState(initialUsers);

  // 🟢 Load from localStorage and convert timestamp strings back to Date objects
  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem("chat_messages");
    const base = stored ? JSON.parse(stored) : initialMessages;
    return base.map(m => ({ ...m, timestamp: new Date(m.timestamp) }));
  });

  const [newMessage, setNewMessage] = useState("");
  const currentUserId = 1;
  const messagesEndRef = useRef(null);

  const sendMessage = useCallback((senderId, content) => {
    if (!content.trim()) return;
    const msg = {
      id: Date.now(),
      senderId,
      content: content.trim(),
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, msg]);
  }, []);

  // Persist + scroll
  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    sendMessage(currentUserId, newMessage);
    setNewMessage("");
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="app">
      <ActiveUsers users={users} currentUserId={currentUserId} />

      <div className="chat-window">
        <ChatHeader participants={users} />

        <MessagesList messages={messages} users={users} currentUserId={currentUserId} />

        <div ref={messagesEndRef} />

        <div className="send-message">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
