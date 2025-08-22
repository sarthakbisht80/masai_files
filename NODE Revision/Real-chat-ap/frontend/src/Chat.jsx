import { useState, useEffect } from "react";

export default function Chat({ socket, username }) {
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("message", (msg) => setMessages((prev) => [...prev, msg]));
    socket.on("chatHistory", (msgs) => setMessages(msgs));
    socket.on("onlineUsers", (users) => setOnlineUsers(users));

    return () => {
      socket.off("message");
      socket.off("chatHistory");
      socket.off("onlineUsers");
    };
  }, [socket]);

  const sendMessage = () => {
    socket.emit("sendMessage", { user: username, text });
    setText("");
  };

  const disconnect = () => socket.disconnect();

  return (
    <div>
      <div>
        <strong>Online:</strong> {onlineUsers.join(", ")}
      </div>
      <div>
        {messages.map((msg, idx) => (
          <p key={idx}>
            <strong>{msg.user}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
      <button onClick={disconnect}>Disconnect</button>
    </div>
  );
}
