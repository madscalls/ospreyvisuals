import "./What.css";
import splat from "../../assets/icons/Branding.png";
import signage from "../../assets/icons/Signage.png";
import vehicle from "../../assets/icons/Vehicle.png";
import laser from "../../assets/icons/Laser.png";
import media from "../../assets/icons/DigitalMedia.png";
import threeD from "../../assets/icons/threeDPrinting.png";

function What() {
  const services = [
    {
      title: "Branding & Logo Design",
      subtitle: "BUILD A BRAND CUSTOMERS REMEMBER",
      description:
        "A strong logo and visual identity builds instant trust. We design brand packages that make your business look established, professional, and worth choosing.",
      icon: <img src={splat} alt="splat" className="what__icon" />,
      featured: false,
    },
    {
      title: "Signage & Print",
      subtitle: "GET SEEN BEFORE CUSTOMERS WALK IN THE DOOR",
      description:
        "Yard signs, banners, storefront signage, window graphics, business cards, flyers, magnets, stickers, and much more. Prints that will make your brand or location impossible to miss and even harder to forget.",
      icon: <img src={signage} alt="signage" className="what__icon" />,
      featured: true,
    },
    {
      title: "Vehicle Wraps & Vinyl",
      subtitle: "TURN YOUR VEHICLE INTO A 24/7 ADVERTISEMENT",
      description:
        "Every mile you drive is marketing. Custom wraps and vinyl lettering put your brand in front of thousands of potential customers every single day.",
      icon: <img src={vehicle} alt="vehicle" className="what__icon-img" />,
      featured: true,
    },
    {
      title: "Laser Engraving",
      subtitle: "PRECISION ENGRAVING FOR LASTING IMPRESSION",
      description:
        "Custom engraving on wood, acrylic, leather, metal, and more. Perfect for business signage, branded merchandise, awards, gifts, and personalized products that add a professional and memorable touch.",
      icon: <img src={laser} alt="Laser" className="what__icon-img" />,
      featured: false,
    },
    {
      title: "Digital & Media",
      subtitle: "STAY CONSISTENT ACROSS EVERY PLATFORM",
      description:
        "Websites, social media graphics, digital ads, and web-ready visuals that keep your brand looking polished whether someone finds you online or in person.",
      icon: <img src={media} alt="meta ball" className="what__icon-img" />,
      featured: false,
    },
    {
      title: "3D Printing",
      subtitle: "TURN IDEAS INTO REAL-WORLD PRODUCTS",
      description:
        "From prototypes and custom parts to promotional items and creative designs, our 3D printing services bring your concepts to life with precision and speed for both personal and buisness applications",
      icon: <img src={threeD} alt="Printer" className="what__icon-img" />,
      featured: false,
    },
  ];

  return (
    <section className="what" id="services">
      <div className="what__container">
        <div className="what__heading">
          <p className="what__eyebrow">WHAT WE DO</p>
          <h2 className="what__title">Everything Your Brand Needs</h2>
          <p className="what__subtitle">
            From concept to completion, we handle every aspect of your visual
            identity.
          </p>
        </div>

        <div className="what__grid">
          {services.map((service) => (
            <article
              key={service.title}
              className={`what__card ${
                service.featured ? "what__card--featured" : ""
              }`}
            >
              <div className="what__card-top">
                <div className="what__icon">{service.icon}</div>
                {service.featured && <span className="what__tag">POPULAR</span>}
              </div>

              <h3 className="what__card-title">{service.title}</h3>
              <p className="what__card-subtitle">{service.subtitle}</p>
              <p className="what__card-description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default What;
