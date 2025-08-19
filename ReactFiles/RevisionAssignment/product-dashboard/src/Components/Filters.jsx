import React from "react";

const Filters = ({ categories, filter, setFilter, sort, setSort }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <select value={filter || ""} onChange={(e) => setFilter(e.target.value || null)}>
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <button onClick={() => setSort("low-high")} style={{ marginLeft: "10px" }}>Price ↑</button>
      <button onClick={() => setSort("high-low")} style={{ marginLeft: "10px" }}>Price ↓</button>
    </div>
  );
};

export default Filters;
