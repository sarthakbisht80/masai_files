import React, { useReducer, useEffect, useState } from "react";

const initialState = (Number(localStorage.getItem("count")) || 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState(1);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div style={styles.container}>
      <h2> Counter App</h2>
      <h1>{count}</h1>

      <div style={styles.inputContainer}>
        <label>Step: </label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          style={styles.input}
        />
      </div>

      <div style={styles.buttonContainer}>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: step })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: step })}>
          −
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "sans-serif",
  },
  inputContainer: {
    margin: "20px 0",
  },
  input: {
    width: "60px",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
};

export default Counter;
