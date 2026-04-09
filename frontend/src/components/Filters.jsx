import React from "react";

const Filters = ({ category, setCategory, minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-3 border rounded-xl shadow-sm"
      >
        <option value="">All Categories</option>
        <option value="Furniture">Furniture</option>
        <option value="Electronics">Electronics</option>
        <option value="Stationery">Stationery</option>
      </select>

      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="p-3 border rounded-xl shadow-sm"
      />

      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="p-3 border rounded-xl shadow-sm"
      />
    </div>
  );
};

export default Filters;