import React from "react";

const ProductRow = ({ product }) => {
  return (
    <tr>
      <td>{product.productName}</td>
      <td>{product.category}</td>
      <td>₹{product.price}</td>
      <td>{product.supplier}</td>
    </tr>
  );
};

export default ProductRow;