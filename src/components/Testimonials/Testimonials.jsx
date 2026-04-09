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
        "Osprey Visuals transformed our shop front completely. We started getting more walk-in customers within a week—people told us they noticed the new sign from down the block.",
      result: "More walk-ins within the first week",
      name: "Marcus Johnson",
      business: "Johnson's Auto Care",
    },
    {
      quote:
        "The branding package they built for us is exactly what we needed. Logo, vehicle wrap, printed menus—everything matches and we finally look like a real, established business.",
      result: "Cohesive brand across every touchpoint",
      name: "Sarah Chen",
      business: "Bloom Bakery",
    },
    {
      quote:
        "I was upfront that I had a tight budget. They worked with me, explained every decision, and delivered something that genuinely makes us look better than our competition.",
      result: "Professional look on a small business budget",
      name: "David Martinez",
      business: "Martinez Landscaping",
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
