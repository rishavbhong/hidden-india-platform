import { Link } from "react-router-dom";

function Navbar() {
  const userRole = "Tourist"; // temporary

  return (
    <nav style={{ padding: "1rem", background: "#111", color: "#fff" }}>
      <h3>Hidden India</h3>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>

        {userRole === "Tourist" && <Link to="/explore">Explore</Link>}
        {userRole === "Guide" && <Link to="/guide-panel">Guide Panel</Link>}
        {userRole === "Guardian" && <Link to="/community">Community</Link>}
      </div>
    </nav>
  );
}

export default Navbar;
