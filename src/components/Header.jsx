
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyles}>
      <Link to="/" style={headerStyles.logo}>OutfitPlanner</Link>

      <nav style={headerStyles.nav}>
        <Link to="/outfits">Catalog</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
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
