import React, { useEffect, useState } from "react";
import axios from "axios";
import db from './data/product.json'
export default function DemoProduct() {
  const [products, setProducts] = useState([]);
console.log(products)
  useEffect(() => {
    // fetch file JSON giả
    axios
      .get("/data/product.json") // đường dẫn tới file JSON hoặc API
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
