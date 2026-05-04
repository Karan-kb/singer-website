import photo1 from "../images/dua-lipa-01.jpg";
import photo2 from "../images/sabrina-carpenter.jpg";
import photo3 from "../images/sanfran.jpeg";

const images = [
  { img: photo1, title: "Dua Lipa" },
  { img: photo2, title: "Sabrina Carpenter" },
  { img: photo3, title: "San Francisco" },
];

function Gallery() {
  return (
    <div style={styles.page} id="gallery">
      
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>Gallery</h1>
          <p style={styles.subtitle}>
            Capturing moments, music, and vibes 🎶
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Photo Collection</h2>

        <div style={styles.grid}>
          {images.map((item, i) => (
            <div key={i} style={styles.card}>
              <img src={item.img} style={styles.image} />
              <div style={styles.cardOverlay}>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    background: "#0f0c29",
    minHeight: "100vh",
    color: "#fff",
  },

  hero: {
    position: "relative",
    height: "50vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1497032205916-ac775f0649ae')",
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
    fontSize: "50px",
  },

  subtitle: {
    color: "#ccc",
  },

  section: {
    padding: "60px 10%",
  },

  sectionTitle: {
    fontSize: "28px",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    position: "relative",
    borderRadius: "15px",
    overflow: "hidden",
    cursor: "pointer",
  },

  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    transition: "0.4s",
  },

  cardOverlay: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    padding: "15px",
    background: "rgba(0,0,0,0.6)",
    textAlign: "center",
  },
};

export default Gallery;