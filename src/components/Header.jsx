
import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function Header() {

  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header style={headerStyles}>
      <Link to="/" style={headerStyles.logo}>OutfitPlanner</Link>

      <nav style={headerStyles.nav}>
        {isAuthenticated ? (
          <>
            <Link to="/outfits">Catalog</Link>
            <span>Welcome, {user.email}</span>
            <button onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/outfits">Catalog</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

const headerStyles = {
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #eee",
  nav: {
    display: "flex",
    gap: "20px",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "20px",
    textDecoration: "none",
    color: "#000",
  },
};
