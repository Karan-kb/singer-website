import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Music from "./components/Music";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
     <Navbar />
     <Home />
      {/* <Hero />
      <Gallery />
      <Music />
      <Blog />
      <Contact /> */}
      <Footer />
    </>
  );
}

export default App;