import React from "react";

const ProductTable = ({ products}) => {
  return (
    <tr>
      <td>{products.name}</td>
    </tr>
  );
};

export default ProductTable;
