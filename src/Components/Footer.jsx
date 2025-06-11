import { useState } from "react";
import Logo from "../assets/logo.svg";
import TwitterLogo from "../assets/icon-twitter.svg";
import PinterestLogo from "../assets/icon-pinterest.svg";
import YouTubeLogo from "../assets/icon-youtube.svg";
import InstagramLogo from "../assets/icon-instagram.svg";
import FacebookLogo from "../assets/icon-facebook.svg";
import "../styles/Footer.scss";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (input) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(input);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setEmail(input);
    setIsValid(validateEmail(input));
  };

  const socialLinks = [
    { icon: FacebookLogo, alt: "Facebook", label: "Visit our Facebook page" },
    { icon: YouTubeLogo, alt: "YouTube", label: "Visit our YouTube page" },
    { icon: TwitterLogo, alt: "Twitter", label: "Visit our Twitter page" },
    { icon: PinterestLogo, alt: "Pinterest", label: "Visit our Pinterest page" },
    { icon: InstagramLogo, alt: "Instagram", label: "Visit our Instagram page" },
  ];

  const footerLinks = [
    "Home", "Careers", "Pricing", "Community", 
    "Products", "Privacy Policy", "About Us"
  ];

  return (
    <footer>
      <div className="footer-div">
        <div className="footer-container">
          {/* Logo + Social Links */}
          <div className="footer-logo-div">
            <img src={Logo} alt="Manage Logo" className="footer-logo" />
            <div className="footer-sociallinks">
              {socialLinks.map((social, index) => (
                <a key={index} href="#" aria-label={social.label}>
                  <img src={social.icon} alt={social.alt} className="footer-image-sociallinks" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            <div className="footer-links-grid">
              {footerLinks.map((link, index) => (
                <a key={index} href="#" className="footer-links-a">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Email CTA */}
          <div className="footer-CTA">
            <div className="footer-CTA-email">
              <input
                type="email"
                placeholder="Updates in your inbox..."
                value={email}
                onChange={handleChange}
                style={{ border: isValid ? "2px solid #f25f3a" : "2px solid red" }}
                aria-label="Email input"
                className="footer-input"
              />
              {!isValid && email && <p style={{ color: "red" }}>Please enter a valid email</p>}
              <button disabled={!isValid}>Go</button>
            </div>

            <p>&copy; {new Date().getFullYear()} Manage. All rights reserved.</p>
            <p className="footer-credits">
              Developed by <a href="https://github.com/Duubemmm">Chidubem Okoli</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;