import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ProductTable from "./components/ProductTable";
import { searchProducts } from "./api";

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);

      const params = {
        q: query || undefined,
        category: category || undefined,
        minPrice: minPrice || undefined,
        maxPrice: maxPrice || undefined,
      };

      const data = await searchProducts(params);
      setProducts(data);
    } catch (error) {
      alert("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          Inventory Search 🔍
        </h1>

        <SearchBar query={query} setQuery={setQuery} />

        <Filters
          category={category}
          setCategory={setCategory}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        <button
          onClick={handleSearch}
          className="w-full mt-4 bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
        >
          Search
        </button>

        {loading ? (
          <p className="text-center mt-4">Loading...</p>
        ) : (
          <ProductTable products={products} />
        )}
      </div>
    </div>
  );
}

export default App;