import photo1 from "../images/dua-lipa-01.jpg";
import photo2 from "../images/sabrina-carpenter.jpg";
import photo3 from "../images/sanfran.jpeg";

const images = [photo1, photo2, photo3];

function Gallery() {
  return (
    <div id="gallery">
      <h2>Gallery</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.map((img, i) => (
          <img key={i} src={img} width="200" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;