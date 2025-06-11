import Logo from "../assets/logo.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import "../Styles/Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLink = [
    { id: 1, name: "Pricing" },
    { id: 2, name: "Product" },
    { id: 3, name: "About Us" },
    { id: 4, name: "Career" },
    { id: 5, name: "Community" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  return (
    <header className="navbar">
      <div className="header-container">
        <div className="header-inner-container">
          <div className="header-logo">
            <img src={Logo} alt="logo" aria-label="Company's Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-links">
            <ul>
              {navLink.map((link) => (
                <li key={link.id}>
                  <a href="#">{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Button */}
          <div className="desktop-button">
            <button className="button" aria-label="Get Started with Manage">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          id="mobile-menu" 
          className={`mobile-nav ${isMenuOpen ? "open" : ""}`}
        >
          <ul>
            {navLink.map((link) => (
              <li key={link.id}>
                <a href="#">{link.name}</a>
              </li>
            ))}
          </ul>
          <button className="mobile-nav-button" aria-label="Get Started with Manage">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;