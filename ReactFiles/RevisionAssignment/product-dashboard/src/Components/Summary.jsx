import React from "react";

const Summary = ({ totalPrice }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default Summary;
