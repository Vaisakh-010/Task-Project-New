import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Choose from "./pages/Choose/Choose";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Testimonials from "./pages/Testimonials/Testimonials";
import "./css/global.css";
import TestimonialsNew from "./components/TestimonialsNew/TestimonialsNew";

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="choose">
        <Choose />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
      {/* <TestimonialsNew /> */}
    </>
  );
}

export default App;
