import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { darkMode, toggleTheme, styles } = useContext(ThemeContext);

  return (
    <header
      style={{
        ...styles,
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #ccc",
      }}
    >
      <nav style={{ display: "flex", gap: "15px" }}>
        <Link to="/"> Trang chủ</Link>
        <Link to="/about"> Giới thiệu</Link>
        <Link to="/contact"> Liên hệ</Link>
      </nav>
      <button onClick={toggleTheme}>
        {darkMode ? " Chế độ Sáng" : " Chế độ Tối"}
      </button>
    </header>
  );
}

export default Header;
