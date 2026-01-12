import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, setUser } = useAuth();

  return (
    <nav style={{ padding: "1rem", background: "#111", color: "#fff" }}>
      <h3>Hidden India</h3>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>

        {user?.role === "Tourist" && <Link to="/explore">Explore</Link>}
        {user?.role === "Guide" && <Link to="/guide-panel">Guide Panel</Link>}
        {user?.role === "Guardian" && <Link to="/community">Community</Link>}
      </div>

      {/* TEMP ROLE SWITCH (for testing only) */}
      <div style={{ marginTop: "0.5rem" }}>
        <button onClick={() => setUser({ role: "Tourist" })}>
          Tourist
        </button>
        <button onClick={() => setUser({ role: "Guide" })}>
          Guide
        </button>
        <button onClick={() => setUser({ role: "Guardian" })}>
          Guardian
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
