import React from "react";

function Music() {
  const songs = [
    {
      title: "Midnight Dreams",
      year: "2026",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Lost in Echoes",
      year: "2025",
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <div style={styles.page}>
      
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>Music</h1>
          <p style={styles.subtitle}>
            Feel the vibe. Experience the sound.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Tracks</h2>

        {songs.map((song, index) => (
          <div key={index} style={styles.card}>
            <img src={song.img} style={styles.image} />

            <div style={styles.cardContent}>
              <h3>{song.title}</h3>
              <p>{song.year}</p>

              <iframe
                width="100%"
                height="200"
                src={song.video}
                title={song.title}
                style={styles.iframe}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </section>

      {/* GRID PLAYLIST */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>All Music</h2>

        <div style={styles.grid}>
          {songs.map((song, index) => (
            <div key={index} style={styles.gridCard}>
              <img src={song.img} style={styles.gridImg} />
              <h4>{song.title}</h4>
              <button style={styles.btn}>▶ Play</button>
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
      "url('https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91')",
    backgroundSize: "cover",
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

  card: {
    display: "flex",
    gap: "25px",
    marginBottom: "30px",
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "15px",
    flexWrap: "wrap",
  },

  image: {
    width: "250px",
    borderRadius: "10px",
  },

  cardContent: {
    flex: 1,
  },

  iframe: {
    marginTop: "10px",
    borderRadius: "10px",
    border: "none",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },

  gridCard: {
    background: "rgba(255,255,255,0.05)",
    padding: "15px",
    borderRadius: "15px",
    textAlign: "center",
  },

  gridImg: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "10px",
  },

  btn: {
    marginTop: "10px",
    padding: "10px 20px",
    borderRadius: "25px",
    border: "none",
    background: "linear-gradient(45deg, #ff9a9e, #a18cd1)",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Music;