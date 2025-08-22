import { useState, useEffect } from "react";
import io from "socket.io-client";
import Chat from "./Chat";

const socket = io("http://localhost:3000");

function App() {
  const [username, setUsername] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    if (username) {
      socket.emit("register", username);
      setRegistered(true);
    }
  };

  if (!registered) {
    return (
      <div>
        <input
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={register}>Join Chat</button>
      </div>
    );
  }

  return <Chat socket={socket} username={username} />;
}

export default App;
