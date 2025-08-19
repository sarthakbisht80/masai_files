import React from "react";

const ProductCard = React.memo(({ product, updateStock }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h4>{product.name}</h4>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={() => updateStock(product.id)}>Buy 1</button>
    </div>
  );
});

export default ProductCard;
