import { useParams, Link } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();

  // SAME DATA (later you can fetch from API)
  const posts = [
    {
      id: "1",
      title: "The Rise of Pop Culture",
      date: "May 2026",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      content:
        "Pop culture has evolved massively over the past decade. Artists, social media, and streaming platforms have reshaped how we consume music and entertainment. This blog explores how global influence is changing trends.",
    },
    {
      id: "2",
      title: "Behind the Music",
      date: "April 2026",
      img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
      content:
        "Every hit song has a story. From late-night studio sessions to creative struggles, this article dives deep into what really goes into producing music that people love.",
    },
    {
      id: "3",
      title: "Live Concert Experience",
      date: "March 2026",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      content:
        "Live concerts are more than just music — they are energy, emotion, and connection. Here's why attending a concert is an unforgettable experience.",
    },
  ];

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h2 style={{ color: "white" }}>Post not found</h2>;
  }

  return (
    <div style={styles.page}>
      
      {/* HERO */}
      <div style={{ ...styles.hero, backgroundImage: `url(${post.img})` }}>
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
          <h1>{post.title}</h1>
          <p>{post.date}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div style={styles.container}>
        <p style={styles.text}>{post.content}</p>

        <Link to="/blog" style={styles.backBtn}>
          ← Back to Blog
        </Link>
      </div>
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

  container: {
    padding: "60px 15%",
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#ddd",
  },

  backBtn: {
    display: "inline-block",
    marginTop: "30px",
    padding: "10px 20px",
    borderRadius: "25px",
    background: "linear-gradient(45deg, #ff9a9e, #a18cd1)",
    color: "#fff",
    textDecoration: "none",
  },
};

export default BlogDetail;