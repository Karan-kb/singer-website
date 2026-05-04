import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Music from "./components/Music";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
     <Home />
      {/* <Hero />
      <Gallery />
       <Blog />
      <Contact /> 
      <Music />*/}
     
     </>
        } />

        <Route path="/blog" element={<Blog />} />
        <Route path="/music" element={<Music />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;