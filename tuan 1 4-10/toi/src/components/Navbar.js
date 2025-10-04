import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f5f5f5" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}

export default Navbar;
