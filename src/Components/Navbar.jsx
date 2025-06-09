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

  return (
    <header>
      <div className="header-container">
        <div className="header-inner-container">
          <div className="header-logo">
            <img src={Logo} alt="logo" aria-label="Company's Logo" />
          </div>

          {/* Desktop Menu */}
          <nav className="nav-links">
            <ul>
              {navLink.map((link) => (
                <li key={link.id}>{link.name}</li>
              ))}
            </ul>
          </nav>

          {/* Desktop Button */}
          <div>
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div id="mobile-menu" className="mobile-nav">
            <ul>
              {navLink.map((link) => (
                <li key={link.id}>{link.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
