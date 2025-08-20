import React, { useState } from "react";
import InputNode from "./Components/InputNode";

export default function App() {
  const [inputs, setInputs] = useState([]);

  const addMainInput = () => {
    setInputs([
      ...inputs,
      { id: Date.now(), value: "", children: [] }
    ]);
  };

  const updateInput = (id, newNode) => {
    setInputs(inputs.map((node) => (node.id === id ? newNode : node)));
  };

  return (
    <div className="container">
      <h1>Nested Input Builder</h1>
      <button className="add-btn " style={{
        padding:"10px",
        backgroundColor:"deepskyblue",
        borderRadius:"5px"
      }} onClick={addMainInput}>
        Add Input
      </button>

      <div className="inputs">
        {inputs.map((node) => (
          <InputNode
            key={node.id}
            node={node}
            onChange={(newNode) => updateInput(node.id, newNode)}
            isRoot={true}  // ✅ Pass root flag
          />
        ))}
      </div>
    </div>
  );
}
