import "./What.css";

function What() {
  const services = [
    {
      title: "Branding & Logo Design",
      subtitle: "BUILD A BRAND CUSTOMERS REMEMBER",
      description:
        "A strong logo and visual identity builds instant trust. We design brand packages that make your business look established, professional, and worth choosing.",
      icon: "⦿",
      featured: false,
    },
    {
      title: "Signage & Print",
      subtitle: "GET SEEN BEFORE CUSTOMERS WALK IN THE DOOR",
      description:
        "Storefront signs, banners, window graphics, and printed materials that make your location impossible to miss and your brand impossible to forget.",
      icon: "▣",
      featured: true,
    },
    {
      title: "Vehicle Wraps & Vinyl",
      subtitle: "TURN YOUR VEHICLE INTO A 24/7 ADVERTISEMENT",
      description:
        "Every mile you drive is marketing. Custom wraps and vinyl lettering put your brand in front of thousands of potential customers every single day.",
      icon: "◔",
      featured: true,
    },
    {
      title: "Custom Fabrication",
      subtitle: "MAKE YOUR SPACE COMMAND ATTENTION",
      description:
        "Dimensional letters, metal signage, and custom built displays that create a premium, professional presence inside and outside your business.",
      icon: "⌁",
      featured: false,
    },
    {
      title: "Digital & Media",
      subtitle: "STAY CONSISTENT ACROSS EVERY PLATFORM",
      description:
        "Social media graphics, digital ads, and web-ready visuals that keep your brand looking polished whether someone finds you online or in person.",
      icon: "◫",
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
