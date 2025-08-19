import React, { useState, useMemo } from "react";
import { initialProducts } from "./data/initialProducts";
import ProductHeader from "./Components/ProductHeaders";
import Filters from "./Components/Filters";
import Summary from "./Components/Summary";
import ProductList from "./Components/ProductList";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(null);

  const categories = useMemo(() => [...new Set(products.map(p => p.category))], [products]);

  const visibleProducts = useMemo(() => {
    let result = [...products];
    if (filter) result = result.filter(p => p.category === filter);
    if (sort === "low-high") result.sort((a, b) => a.price - b.price);
    if (sort === "high-low") result.sort((a, b) => b.price - a.price);
    return result;
  }, [products, filter, sort]);

  const totalPrice = useMemo(() => {
    return visibleProducts.reduce((sum, p) => sum + p.price, 0);
  }, [visibleProducts]);

  const updateStock = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: p.stock - 1 } : p))
    );
  };

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "New Item",
      price: Math.floor(Math.random() * 100),
      category: "Misc",
      rating: 4,
      stock: 10,
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <ProductHeader total={visibleProducts.length} filter={filter} sort={sort} />
      <Filters categories={categories} filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
      <Summary totalPrice={totalPrice} />
      <button onClick={addProduct} style={{ marginBottom: "20px" }}>Add Product</button>
      <ProductList products={visibleProducts} updateStock={updateStock} />
    </div>
  );
}

export default App;
