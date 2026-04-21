import { useEffect, useState } from "react";
import Logo from "../../assets/ov1.svg";
import "./Nav.css";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__container">
        <div className="nav__logo">
          <img src={Logo} className="nav__logo-pic" alt="Osprey Visuals Logo" />
        </div>

        <nav className={`nav__links ${isMenuOpen ? "nav__links--open" : ""}`}>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a
            href="https://www.instagram.com/ospreyvisualsfl/"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </a>
          <a href="#why-us" onClick={() => setIsMenuOpen(false)}>
            Why Us
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <a href="#contact" className="nav__button nav__button--desktop">
          FREE ESTIMATE
          <span></span>
        </a>

        <button
          className="nav__hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Nav;
