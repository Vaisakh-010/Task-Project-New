import { useState } from "react";
import "./Navbar.css";
import dot from "../../assets/images/Vector.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">ORANGE PR</div>

      <div className="nav-button">
        <nav className="desktop-nav">
          <ul>
            <li onClick={() => scrollToSection("home")}>Home</li>

            <li onClick={() => scrollToSection("services")}>PR Services</li>

            <li onClick={() => scrollToSection("about")}>About Us</li>

            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </nav>

        <button
          className="menu-btn"
          aria-label="Open menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={dot} alt="menu" className="dot" />
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <li onClick={() => scrollToSection("home")}>Home</li>

            <li onClick={() => scrollToSection("services")}>PR Services</li>

            <li onClick={() => scrollToSection("about")}>About Us</li>

            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
