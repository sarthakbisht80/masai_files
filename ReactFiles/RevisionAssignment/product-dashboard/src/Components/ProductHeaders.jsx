import React from "react";

const ProductHeader = React.memo(({ total, filter, sort }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{total} Products</h2>
      <p>Filter: {filter || "None"} | Sort: {sort || "None"}</p>
    </div>
  );
});

export default ProductHeader;
