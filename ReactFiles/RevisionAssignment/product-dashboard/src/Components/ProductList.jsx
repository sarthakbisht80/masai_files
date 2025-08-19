import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, updateStock }) => {
  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} updateStock={updateStock} />
      ))}
    </div>
  );
};

export default ProductList;
