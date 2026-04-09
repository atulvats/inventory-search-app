import React from "react";

const ProductTable = ({ products }) => {
  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No results found 😔
      </p>
    );
  }

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-3 px-4">Product</th>
            <th className="py-3 px-4">Category</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Supplier</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id} className="text-center border-b hover:bg-gray-100">
              <td className="py-2 px-4">{item.productName}</td>
              <td className="py-2 px-4">{item.category}</td>
              <td className="py-2 px-4">₹{item.price}</td>
              <td className="py-2 px-4">{item.supplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;