import { useState, useRef, createContext, useContext, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Counter from "./Counter";

function App() {
  const [input, setinput] = useState("");
  const dict = [
    "apple",
    "are",
    "air",
    "as",
    "ice",
    "go",
    "get",
    "kick",
    "paste",
    "be",
    "before",
    "ball",
    "bat",
    "cat",
    "custom",
    "Dog",
    "mango",
    "me",
    "have",
    "li",
  ];


  useEffect(()=>{
    aref.current.focus();
  },[])
  const [matched, setmatched] = useState([]);
  let aref= useRef();
  let timer =useRef(null);

  function handleChange(e) {
    const val = e.target.value;
    setinput(val);

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      console.log("typped val :-", val);
      const filteredData = dict.filter((item) => item.toLowerCase().includes(val.toLowerCase()));
      setmatched(filteredData);
    }, 700);
  }
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="typehead">
        <input
        ref={aref}
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search...."
        />
        <div
          style={{
            backgroundColor: "aliceblue",
            width: "100%",
            color: "black",
          }}
        >
          {input && matched.map((val) => 
          <div key={val}>{val}  </div>)}
        </div>
      </div>

      <h2>{input}</h2>
    </>
  );
}

export default App;
