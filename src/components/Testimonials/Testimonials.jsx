import "./Testimonials.css";

function Testimonials() {
  const showcaseImages = [
    "Window vinyl graphics installation",
    "Outdoor monument sign",
    "Custom fabricated metal sign",
  ];

  const testimonials = [
    {
      quote:
        "I explained my vision to Nick, and he captured everything I had in mind perfectly. I am extremely happy with the results! I highly recommend them to all my friends who need vehicle wraps, car lettering, or advertisement signs.",
      result: "Great customer service",
      name: "Wellington N.",
    },
    {
      quote:
        "I want to thank Chad for designing my lettering on my business truck, what an awesome job he did and the proffesionalism that he gave me",
      result: "Proffesionalism",
      name: "John R",
    },
    {
      quote:
        "These guys do an Amazing job! I went in their shop around 2 PM on a Thursday afternoon to discuss getting a name installed on my boat. By 4 PM it was complete. They had gone to the marina where my boat was stored. Outstanding customer service! These guys ROCK!",
      result: "Prompt Service",
      name: "Richard Harris",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__heading">
          <p className="testimonials__eyebrow">TRUSTED LOCALLY</p>
          <h2 className="testimonials__title">Real Work. Real Results.</h2>
        </div>

        <div className="testimonials__image-grid">
          {showcaseImages.map((label) => (
            <div key={label} className="testimonials__image-card">
              <span className="testimonials__image-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonials__card">
              <div className="testimonials__quote-mark">❞</div>

              <p className="testimonials__quote">"{testimonial.quote}"</p>

              <div className="testimonials__result">
                <span>•</span>
                <p>{testimonial.result}</p>
              </div>

              <div className="testimonials__author">
                <h3 className="testimonials__name">{testimonial.name}</h3>
                <p className="testimonials__business">{testimonial.business}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
