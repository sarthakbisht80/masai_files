import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      style={{
        height: "350px",
        width: "280px",
        border: "1px solid black",
        cursor: "pointer",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        style={{
          width: "95%",
          height: "200px",
          objectFit: "contain",
        }}
        src={product.image}
        alt={product.title}
      />
      <h3 style={{ fontSize: "16px", margin: "10px 0", textAlign: "center" }}>
        {product.title}
      </h3>
      <p style={{ fontWeight: "bold" }}>${product.price}</p>
    </div>
  );
};

export default ProductCard;
