import React from "react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default SearchBar;