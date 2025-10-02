import React, { useState, useEffect } from "react";

export default function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [data, setData] = useState([]);

  // Fetch API data --
  useEffect(() => {
    if (isOnline) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((json) => setData(json.slice(0, 10))) // First 10 posts
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [isOnline]); // refetch when back online

  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Network Aware App</h1>

      {!isOnline ? (
        <div style={{ color: "red", fontWeight: "bold", marginTop: "20px" }}>
          🔴 Currently you are offline. <br />
          Connect to a network to see the data.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "2px 2px 6px rgba(0,0,0,0.1)",
                backgroundColor:"peachpuff"
              }}
            >
              <h3 style={{ marginBottom: "10px", color: "Green" }}>
                {item.title}
              </h3>
              <p style={{ color: "red" }}>{item.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
