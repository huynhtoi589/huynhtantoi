// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          {/* Route động cho từng user */}
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
