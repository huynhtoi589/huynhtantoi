import React from "react";

function ProductItem({ product }) {
  const formatCurrency = (price) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        padding: "15px",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100px", height: "100px", objectFit: "contain" }}
      />
      <h4 style={{ fontSize: "16px", height: "45px" }}>{product.title}</h4>
      <p style={{ color: "#2b6cb0", fontWeight: "bold" }}>
        {formatCurrency(product.price * 25000)}
      </p>
    </div>
  );
}

export default ProductItem;
