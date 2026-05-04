import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.page} id="contact">

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>Let’s Talk</h1>
          <p style={styles.subtitle}>
            Got an idea? Let’s build something incredible 🚀
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section style={styles.section}>
        <div style={styles.wrapper}>

          {/* LEFT SIDE */}
          <div style={styles.left}>
            <h2>Contact Info</h2>

            <div style={styles.infoItem}>📧 contact@musicapp.com</div>
            <div style={styles.infoItem}>📱 +977 98XXXXXXXX</div>
            <div style={styles.infoItem}>📍 Kathmandu, Nepal</div>

            <div style={styles.social}>
              <span>🌐 Instagram</span>
              <span>🐦 Twitter</span>
              <span>🎵 Spotify</span>
            </div>
          </div>

          {/* FORM CARD */}
          <form style={styles.card}>
            <input
              name="name"
              placeholder="Your Name"
              style={styles.input}
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Your Email"
              style={styles.input}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              style={styles.textarea}
              onChange={handleChange}
            ></textarea>

            <button style={styles.button}>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    minHeight: "100vh",
    color: "#fff",
  },

  hero: {
    position: "relative",
    height: "50vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
  },

  heroContent: {
    position: "relative",
    textAlign: "center",
  },

  title: {
    fontSize: "60px",
    fontWeight: "bold",
  },

  subtitle: {
    color: "#ddd",
    marginTop: "10px",
  },

  section: {
    padding: "80px 10%",
  },

  wrapper: {
    display: "flex",
    gap: "50px",
    flexWrap: "wrap",
    alignItems: "center",
  },

  left: {
    flex: 1,
    minWidth: "250px",
  },

  infoItem: {
    marginTop: "15px",
    fontSize: "16px",
    opacity: 0.9,
  },

  social: {
    marginTop: "30px",
    display: "flex",
    gap: "15px",
    opacity: 0.8,
  },

  card: {
    flex: 1,
    minWidth: "280px",
    padding: "30px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(15px)",
    boxShadow: "0 0 30px rgba(255,255,255,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    background: "rgba(255,255,255,0.1)",
    color: "#fff",
  },

  textarea: {
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    minHeight: "120px",
    outline: "none",
    background: "rgba(255,255,255,0.1)",
    color: "#fff",
  },

  button: {
    marginTop: "10px",
    padding: "14px",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(45deg, #ff9a9e, #a18cd1)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Contact;