import React, { useState, useEffect, useRef } from "react";

const JokeApp = () => {
  const [joke, setJoke] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [numJokes, setNumJokes] = useState(1);
  const abortControllerRef = useRef(null); // For cancelling old requests

  // ✅ Fetch random joke(s)
  const fetchJokes = async (count = 1) => {
    if (count < 1 || count > 5) return;

    // Cancel previous ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setLoading(true);
    setError("");
    setJoke(null);

    try {
      // Fetch multiple jokes sequentially
      const jokes = [];
      for (let i = 0; i < count; i++) {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        jokes.push(data);
      }

      // Update current joke (latest one) & maintain history of max 5
      const newHistory = [...jokes, ...history].slice(0, 5);
      setJoke(jokes[jokes.length - 1]);
      setHistory(newHistory);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError("Failed to fetch joke.");
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ Identify the longest setup for highlighting
  const getLongestSetupId = () => {
    if (history.length === 0) return null;
    return history.reduce((longest, curr) =>
      curr.setup.length > longest.setup.length ? curr : longest
    ).id;
  };

  const longestSetupId = getLongestSetupId();

  // ✅ Clear history
  const clearHistory = () => setHistory([]);

  return (
    <div style={styles.container}>
      <h1>😂 Random Joke Generator</h1>

      <div style={styles.controls}>
        <button onClick={() => fetchJokes(1)} disabled={loading}>
          Get Random Joke
        </button>

        <div>
          <input
            type="number"
            min="1"
            max="5"
            value={numJokes}
            onChange={(e) => setNumJokes(Number(e.target.value))}
            style={styles.input}
          />
          <button onClick={() => fetchJokes(numJokes)} disabled={loading}>
            Fetch Multiple Jokes
          </button>
        </div>

        <button onClick={clearHistory} disabled={!history.length}>
          Clear History
        </button>
      </div>

      {/* ✅ Conditional Rendering */}
      {loading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}
      {joke && !loading && !error && (
        <div style={styles.currentJoke}>
          <p><strong>Setup:</strong> {joke.setup}</p>
          <p><strong>Punchline:</strong> {joke.punchline}</p>
        </div>
      )}

      {/* ✅ Joke History */}
      {history.length > 0 && (
        <div style={styles.history}>
          <h3>Last {history.length} Jokes</h3>
          <ul style={styles.list}>
            {history.map((item) => (
              <li
                key={item.id}
                style={{
                  ...styles.listItem,
                  backgroundColor:
                    item.id === longestSetupId ? "#fef3c7" : "#f3f4f6",
                }}
              >
                <p><strong>Setup:</strong> {item.setup}</p>
                <p><em>{item.punchline}</em></p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ✅ Inline Styles
const styles = {
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    margin: "40px auto",
    maxWidth: "600px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    padding: "20px",
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    marginBottom: "20px",
  },
  input: {
    width: "60px",
    textAlign: "center",
    marginRight: "10px",
  },
  currentJoke: {
    backgroundColor: "#e0f2fe",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  loading: { color: "#3b82f6", fontWeight: "bold" },
  error: { color: "#ef4444" },
  history: { textAlign: "left" },
  list: { listStyle: "none", padding: 0 },
  listItem: {
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "10px",
  },
};

export default JokeApp;
