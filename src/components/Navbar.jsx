import { Link, useLocation } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/gallery" style={styles.link}>Gallery</Link>
      {/* <a href="#" style={styles.link}>Home</a> */}
      <Link to="/music" style={styles.link}>Music</Link>
      <Link to="/blog" style={styles.link}>Blog</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
      
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: "20px",
    right: "20px",
    display: "flex",
    gap: "30px",
    padding: "12px 28px",
    borderRadius: "40px",

    // 💎 gradient glass effect instead of plain white
    background: "linear-gradient(135deg, rgba(255,182,193,0.25), rgba(216,180,254,0.25))",
    backdropFilter: "blur(12px)",

    // 💫 softer elegant shadow
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",

    border: "1px solid rgba(255,255,255,0.3)",
    zIndex: 1000,
  },

  link: {
    textDecoration: "none",

    // 🎨 gradient text (looks premium)
    background: "linear-gradient(45deg, #ff9a9e, #fad0c4, #a18cd1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",

    fontWeight: "600",
    fontSize: "16px",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
  }
};

export default Navbar;