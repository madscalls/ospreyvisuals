import { useState, useEffect } from "react";
import "./Carousel.css";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="carousel">
      <div
        className="carousel__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide ${i + 1}`}
            className="carousel__slide"
          />
        ))}
      </div>

      <button className="carousel__btn carousel__btn--prev" onClick={prev}>
        ‹
      </button>
      <button className="carousel__btn carousel__btn--next" onClick={next}>
        ›
      </button>

      <div className="carousel__dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`carousel__dot ${i === current ? "carousel__dot--active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
