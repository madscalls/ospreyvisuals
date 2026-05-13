import "./Quote.css";

function Quote() {
  const highlights = [
    {
      title: "Custom Design",
      subtitle: "Not templates",
    },
    {
      title: "Personal Service",
      subtitle: "Not chatbots",
    },
    {
      title: "Real Results",
      subtitle: "Not guesswork",
    },
  ];

  return (
    <section className="quote" id="quote">
      <div className="quote__container">
        <div className="quote__badge">THE OSPREY DIFFERENCE</div>

        <h2 className="quote__title">
          Not Just Another
          <br />
          <span>Print Shop.</span>
        </h2>

        <p className="quote__description">
          Online print stores give you a template and call it done. We sit down
          with you, learn your business, and build something custom—so what you
          get actually works for your specific customers, location, and goals.
          You get <strong>a partner, not just a product.</strong>
        </p>

        <div className="quote__highlights">
          {highlights.map((item) => (
            <div key={item.title} className="quote__card">
              <h3 className="quote__card-title">{item.title}</h3>
              <p className="quote__card-subtitle">{item.subtitle}</p>
            </div>
          ))}
        </div>

        <a href="#contact" className="quote__button">
          Get a Free Quote <span>→</span>
        </a>

        <p className="quote__note">
          No commitment. We'll reach out within 24 hours.
        </p>
      </div>
    </section>
  );
}

export default Quote;
