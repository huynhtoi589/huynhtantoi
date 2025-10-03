
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
 
 <Header></Header>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
