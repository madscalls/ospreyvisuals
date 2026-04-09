import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="#top" className="footer__brand">
          <span className="footer__logo">OV</span>
          <span className="footer__brand-text">Osprey Visuals</span>
        </a>

        <nav className="footer__nav">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer__copyright">
          © 2026 Osprey Visuals. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
