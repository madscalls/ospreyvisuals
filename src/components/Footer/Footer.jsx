import "./Footer.css";
import insta from "../../assets/Instagram_Glyph_Black.png";
import Facebook from "../../assets/Fb.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <nav className="footer__nav">
          <a href="https://www.instagram.com/ospreyvisualsfl/">
            <img
              src={insta}
              className="Footer__social-icon insta"
              alt="Instagram"
            />
          </a>
          <a href="https://www.facebook.com/OspreyVisuals/">
            <img src={Facebook} className="Footer__social-icon fb" />
          </a>
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
