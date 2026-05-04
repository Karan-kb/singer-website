function Blog() {
  const posts = [
    {
      title: "The Rise of Pop Culture",
      date: "May 2026",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      desc: "Exploring how modern pop artists are shaping global trends.",
    },
    {
      title: "Behind the Music",
      date: "April 2026",
      img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
      desc: "A deep dive into the creative process of hit songs.",
    },
    {
      title: "Live Concert Experience",
      date: "March 2026",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      desc: "Why live performances create unforgettable memories.",
    },
  ];

  return (
    <div style={styles.page} id="blog">
      
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>Blog</h1>
          <p style={styles.subtitle}>
            Stories, insights, and music vibes 🎧
          </p>
        </div>
      </section>

      {/* BLOG POSTS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Latest Posts</h2>

        <div style={styles.grid}>
          {posts.map((post, i) => (
            <div key={i} style={styles.card}>
              <img src={post.img} style={styles.image} />

              <div style={styles.cardContent}>
                <p style={styles.date}>{post.date}</p>
                <h3>{post.title}</h3>
                <p style={styles.desc}>{post.desc}</p>

                <button style={styles.btn}>Read More</button>
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
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "15px",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },

  cardContent: {
    padding: "15px",
  },

  date: {
    fontSize: "12px",
    color: "#aaa",
  },

  desc: {
    fontSize: "14px",
    color: "#ccc",
  },

  btn: {
    marginTop: "10px",
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    background: "linear-gradient(45deg, #ff9a9e, #a18cd1)",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Blog;