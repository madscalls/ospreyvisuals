import "./Home.css";
import Lettering from "../../assets/lettering.png";
import blueboat from "../../assets/boatbefore.png";
import store from "../../assets/store.png";
import bluecar from "../../assets/bluecar.png";
import van from "../../assets/van.png";
import Carousel from "../Carousel/Carousel";

function Home() {
  const heroImages = [blueboat, bluecar, van, store];

  return (
    <section className="home">
      <div className="home__container">
        <div className="home__content">
          <div className="home__badge">
            <span className="home__badge-dot"></span>
            <span>PROFESSIONAL BRANDING & VISUALS</span>
          </div>

          <h1 className="home__title">
            Professional
            <br />
            Branding & Visuals
            <br />
            That Gets Your
            <br />
            Business Noticed.
          </h1>

          <p className="home__description">
            We create clean, professional visuals that make your business look
            credible, memorable, and ready to attract more customers.
          </p>

          <blockquote className="home__quote">
            "Your branding is your first impression—if it looks cheap, people
            assume your business is too."
          </blockquote>

          <div className="home__actions">
            <a href="#contact" className="home__button home__button--primary">
              Get a Free Quote
            </a>

            <a
              href="#portfolio"
              className="home__button home__button--secondary"
            >
              View Our Work
            </a>
          </div>

          <div className="home__benefits">
            <span>✓ Local</span>
            <span>✓ Fast Turnaround</span>
            <span>✓ No Minimums</span>
          </div>

          <div className="home__trust">
            <div className="home__avatars">
              <span>JM</span>
              <span>SK</span>
              <span>RL</span>
              <span>AB</span>
            </div>

            <div className="home__reviews">
              <div className="home__stars">★★★★★</div>
              <p>Trusted by 200+ local businesses</p>
            </div>
          </div>
        </div>

        <div className="home__visual">
          <div className="home__card home__card--large">
            <Carousel images={heroImages} />
          </div>

          <div className="home__visual-bottom">
            <div className="home__card home__card--small">
              <span>Vehicle wrap design</span>
              <img
                src={bluecar}
                alt="portfolio image"
                className="Home__card-image home__card-imgleft"
              />
            </div>

            <div className="home__card home__card--small">
              <span>Brand identity package</span>
              <img
                src={van}
                alt="portfolio image"
                className="Home__card-image home__card-imgsmall"
              />
            </div>
          </div>

          <div className="home__stat-card">
            <p>Projects Completed</p>
            <h2>500+</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
