import { useState } from "react";
import "./Navbar.css";
import dot from "../../assets/images/Vector.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">ORANGE PR</div>

      <div className="nav-button">
        <nav className="desktop-nav">
          <ul>
            <li>Home</li>
            <li>PR Services</li>
            <li>About Us</li>
            <li>Contact</li>
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
            <li>Home</li>
            <li>PR Services</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
