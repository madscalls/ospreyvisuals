import { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__container">
        <div className="nav__logo">
          <span className="nav__logo-box">OV</span>
          <span className="nav__logo-text">Osprey Visuals</span>
        </div>

        <nav className="nav__links">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav__button">
          Get a Quote
        </a>
      </div>
    </header>
  );
}

export default Nav;
