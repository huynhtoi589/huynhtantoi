import React, { useEffect, useState, useMemo, useRef, useContext } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const { styles } = useContext(ThemeContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Lỗi fetch API:", err));
  }, []);

  // useMemo để tối ưu tìm kiếm
  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  const handleSearch = () => {
    setSearch(inputRef.current.value);
  };

  return (
    <div style={{ ...styles, padding: "20px" }}>
      <h2>🛒 Danh sách sản phẩm</h2>

      <div style={{ marginBottom: "15px" }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          style={{ padding: "8px", width: "250px", marginRight: "10px" }}
        />
        <button onClick={handleSearch}>🔍 Tìm</button>
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Home;
