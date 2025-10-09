import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <p>Không có sản phẩm nào.</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
      }}
    >
      {products.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;
