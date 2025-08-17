import React from "react";
import FormattedInput from "./components/FormattedInput";

function App() {
  const handleChange = (rawDigits) => {
    console.log("Digits only:", rawDigits);
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Ref-only Formatted Input</h1>
      <FormattedInput initialValue="12345678" onChange={handleChange} />
    </div>
  );
}

export default App;
