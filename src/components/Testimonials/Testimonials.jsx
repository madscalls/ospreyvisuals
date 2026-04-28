import { useState } from "react";
import "./Testimonials.css";
import greenWall from "../../assets/greenWall.jpg";
import redTruck from "../../assets/redTruck.jpg";
import piggie from "../../assets/oink.jpg";
import boatboat from "../../assets/boat3.png";

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null);

  const showcaseImages = [
    { img: greenWall, className: "Testimonials__showcase-one" },
    { img: boatboat, className: "Testimonials__showcase-two" },
    { img: piggie, className: "Testimonials__showcase-three" },
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
    {
      quote:
        "Nick was Super helpful through the whole process.. Super proffesional and I will definitely be back to get some more work done soon!",
      result: "Striving to earn YOU business",
      name: "Marcus K",
    },
  ];

  const total = testimonials.length;

  const navigate = (dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) =>
        dir === "right" ? (prev + 1) % total : (prev - 1 + total) % total,
      );
      setAnimating(false);
    }, 100);
  };

  const visible = [
    testimonials[(current - 1 + total) % total],
    testimonials[current],
    testimonials[(current + 1) % total],
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__heading">
          <p className="testimonials__eyebrow">TRUSTED LOCALLY</p>
          <h2 className="testimonials__title">Real Work. Real Results.</h2>
        </div>

        <div className="testimonials__image-grid">
          {showcaseImages.map((item) => (
            <div key={item.className} className="testimonials__image-card">
              <img src={item.img} className={item.className} alt="" />
            </div>
          ))}
        </div>

        <div className="testimonials__carousel">
          <button
            className="testimonials__arrow testimonials__arrow--left"
            onClick={() => navigate("left")}
            aria-label="Previous"
          >
            &#8249;
          </button>

          <div
            className={`testimonials__grid testimonials__grid--sliding ${animating ? `testimonials__grid--slide-${direction}` : ""}`}
          >
            {testimonials.map((testimonial, i) => (
              <article
                key={testimonial.name + i}
                className={`testimonials__card ${i === current ? "testimonials__card--active" : "testimonials__card--side"}`}
              >
                <div className="testimonials__quote-mark">&#10077;</div>
                <p className="testimonials__quote">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="testimonials__result">
                  <span>•</span>
                  <p>{testimonial.result}</p>
                </div>
                <div className="testimonials__author">
                  <h3 className="testimonials__name">{testimonial.name}</h3>
                </div>
              </article>
            ))}
          </div>

          <button
            className="testimonials__arrow testimonials__arrow--right"
            onClick={() => navigate("right")}
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>

        <div className="testimonials__dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`testimonials__dot ${i === current ? "testimonials__dot--active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
