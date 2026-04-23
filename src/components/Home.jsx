import { useRef } from "react";
import React, { useEffect } from "react";

function Home() {
  return (
    <>
      
      <section id="home" style={styles.container}>
        <div style={styles.overlay}></div>

        <div style={styles.content}>
          <p style={styles.tag}>New Album Out Now</p>

          <h1 style={styles.title}>Ava Rai</h1>

          <p style={styles.subtitle}>
            Singer • Performer • Dreamer
          </p>

          <div style={styles.buttons}>
            <button style={styles.primaryBtn}>▶ Listen Now</button>
            <button style={styles.secondaryBtn}>View Gallery</button>
          </div>
        </div>
      </section>

      
      <section style={styles.aboutSection}>
        <div style={styles.aboutContainer}>

          <div style={styles.imageBox}>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="Singer"
              style={styles.image}
            />
          </div>

          <div style={styles.textBox}>
            <h2 style={styles.aboutTitle}>About Ava</h2>

            <p style={styles.aboutText}>
              Ava Rai is a passionate singer known for her soulful voice
              and emotional performances. She blends modern pop with
              deep emotional storytelling.
            </p>

            <p style={styles.aboutText}>
              From intimate concerts to large stages, she creates music
              that connects deeply with listeners around the world.
            </p>

            <button style={styles.primaryBtn}>Read More</button>
          </div>

        </div>
      </section>

<GallerySlider />



  
      <section style={styles.musicSection}>
        <h2 style={styles.sectionTitle}>Featured Music</h2>

        <div style={styles.musicCard}>
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
            alt="Music"
            style={styles.musicImage}
          />

          <div>
            <h3 style={{ color: "#fff" }}>Midnight Dreams</h3>
            <p style={{ color: "#ccc" }}>Latest Single • 2026</p>

            <button style={styles.primaryBtn}>▶ Play Now</button>
          </div>
        </div>
        <div style={styles.musicCard}>
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
            alt="Music"
            style={styles.musicImage}
          />

          <div>
            <h3 style={{ color: "#fff" }}>Midnight Dreams</h3>
            <p style={{ color: "#ccc" }}>Latest Single • 2026</p>

            <button style={styles.primaryBtn}>▶ Play Now</button>
          </div>
        </div>
      </section>

    
<section style={styles.contactSection}>
  <h2 style={styles.sectionTitle}>Contact</h2>

  <p style={styles.contactText}>
    For bookings, collaborations, or media inquiries—reach out below.
  </p>

  <div style={styles.contactBox}>
    <input type="text" placeholder="Your Name" style={styles.input} />
    <input type="email" placeholder="Your Email" style={styles.input} />
    <textarea placeholder="Your Message" style={styles.textarea}></textarea>

    <button style={styles.primaryBtn}>Send Message</button>
  </div>
</section>
    </>
  );
}

function GallerySlider() {
  const scrollRef = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  ];

  const loopImages = [...images, ...images];

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;

    const move = 300;

    if (dir === "right") {
      el.scrollBy({ left: move, behavior: "smooth" });

      setTimeout(() => {
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.style.scrollBehavior = "auto";   // disable animation
          el.scrollLeft = 0;                  // jump instantly
          el.style.scrollBehavior = "smooth"; // restore
        }
      }, 300);
    }

    if (dir === "left") {
      el.scrollBy({ left: -move, behavior: "smooth" });

      setTimeout(() => {
        if (el.scrollLeft <= 0) {
          el.style.scrollBehavior = "auto";
          el.scrollLeft = el.scrollWidth / 2;
          el.style.scrollBehavior = "smooth";
        }
      }, 300);
    }
  };

  return (
    <section style={styles.gallerySection}>
      <h2 style={styles.sectionTitle}>Gallery</h2>

      <div style={styles.sliderWrapper}>
        <button onClick={() => scroll("left")} style={styles.arrow}>
          ◀
        </button>

        <div ref={scrollRef} style={styles.slider}>
          {loopImages.map((src, i) => (
            <img key={i} src={src} style={styles.galleryImage} />
          ))}
        </div>

        <button onClick={() => scroll("right")} style={styles.arrow}>
          ▶
        </button>
      </div>
      <div style={styles.galleryBtnWrap}>
            <button style={styles.primaryBtn}>  View Galley</button>
            
          </div>
    </section>
  );
}
const styles = {
  
  container: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "0 8%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to right, rgba(0,0,0,0.78), rgba(0,0,0,0.25))",
    zIndex: 1,
  },

  content: {
    position: "relative",
    color: "#fff",
    maxWidth: "600px",
    zIndex: 2,
  },

  tag: {
    color: "#ff9a9e",
    marginBottom: "10px",
    letterSpacing: "2px",
  },

  title: {
    fontSize: "clamp(40px, 8vw, 80px)",
    marginBottom: "10px",
  },

  subtitle: {
    marginBottom: "20px",
    color: "#ddd",
  },

  buttons: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "12px 25px",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(45deg, #ff9a9e, #a18cd1)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
  },

  secondaryBtn: {
    padding: "12px 25px",
    borderRadius: "30px",
    border: "1px solid #fff",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
  },

 
  aboutSection: {
    padding: "80px 10%",
    background: "#0f0c29",
  },

  aboutContainer: {
    display: "flex",
    gap: "50px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  imageBox: {
    flex: "1",
    minWidth: "280px",
  },

  image: {
    width: "100%",
    borderRadius: "20px",
  },

  textBox: {
    flex: "1",
    minWidth: "280px",
  },

  aboutTitle: {
    fontSize: "32px",
    marginBottom: "15px",
    color: "#fff",
  },

  aboutText: {
    marginBottom: "15px",
    color: "#ccc",
    lineHeight: "1.6",
  },

  
  musicSection: {
    padding: "80px 10%",
    background: "#14112e",
    display: "flex",
    flexDirection: "column",
    gap: "25px"
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: "30px",
    color: "#fff",
  },

  musicCard: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
    flexWrap: "wrap",
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "20px",
  },

  musicImage: {
    width: "220px",
    borderRadius: "15px",
  },

  gallerySection: {
  padding: "80px 10%",
  background: "#14112e",
},

galleryGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
},

galleryImage: {
  width: "100%",
  height: "250px",
  objectFit: "cover",
  borderRadius: "15px",
  cursor: "pointer",
  transition: "0.3s",
  transform: "scale(1)",
},

sliderWrapper: {
  display: "flex",
  alignItems: "center",
  gap: "10px",
},

galleryBtn: {
  marginTop: "25px",
  padding: "14px 35px",
  borderRadius: "50px",
  border: "1px solid rgba(255,255,255,0.25)",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "500",
  letterSpacing: "1px",
  backdropFilter: "blur(12px)",
  transition: "0.3s ease",
  display: "inline-block",
},

galleryBtnWrap: {
  display: "flex",
  justifyContent: "center",
  marginTop: "35px",
},

slider: {
  display: "flex",
  overflowX: "hidden",
  scrollBehavior: "auto",
  gap: "20px",
},

arrow: {
  background: "rgba(255,255,255,0.1)",
  border: "none",
  color: "#fff",
  fontSize: "20px",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "50%",
},

  contactSection: {
  padding: "80px 10%",
  background: "#0f0c29",
  textAlign: "center",
},

contactText: {
  color: "#ccc",
  marginBottom: "30px",
},

contactBox: {
  maxWidth: "600px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
},

input: {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
  color: "#fff",
  outline: "none",
},

textarea: {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
  color: "#fff",
  height: "120px",
  resize: "none",
  outline: "none",
},
};

export default Home;