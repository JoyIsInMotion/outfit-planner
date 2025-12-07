import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Outfit Planner</h1>
      <p style={styles.subtitle}>
        Organize your wardrobe and plan stunning outfits effortlessly.
      </p>

      <div style={styles.buttons}>
        <Link to="/outfits" style={styles.primaryBtn}>Browse Outfits</Link>
        <Link to="/login" style={styles.secondaryBtn}>Login</Link>
      </div>
    </section>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px",
  },
  title: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  primaryBtn: {
    padding: "10px 20px",
    backgroundColor: "#000",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
  },
  secondaryBtn: {
    padding: "10px 20px",
    backgroundColor: "#ddd",
    color: "#333",
    textDecoration: "none",
    borderRadius: "6px",
  },
};
