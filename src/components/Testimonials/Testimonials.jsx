import "./Testimonials.css";
import greenWall from "../../assets/greenWall.jpg";
import redTruck from "../../assets/redTruck.jpg";
import piggie from "../../assets/oink.jpg";
import boatboat from "../../assets/boat3.png";

function Testimonials() {
  const showcaseImages = [
    {
      img: greenWall,
      className: "Testimonials__showcase-one",
    },
    {
      img: boatboat,
      className: "Testimonials__showcase-two",
    },
    {
      img: piggie,
      className: "Testimonials__showcase-three",
    },
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

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__heading">
          <p className="testimonials__eyebrow">TRUSTED LOCALLY</p>
          <h2 className="testimonials__title">Real Work. Real Results.</h2>
        </div>

        <div className="testimonials__image-grid">
          {showcaseImages.map((item) => (
            <div key={item.label} className="testimonials__image-card">
              <img src={item.img} className={item.className} alt={item.label} />
              <span className="testimonials__image-label">{item.label}</span>
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
