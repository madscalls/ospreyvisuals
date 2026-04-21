import { useState, useRef, useEffect } from "react";
import "./BeforeAfterSlider.css";

function BeforeAfterSlider({ beforeSrc, afterSrc }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const animRef = useRef(null);
  const dirRef = useRef(1);

  const startAuto = () => {
    cancelAnimationFrame(animRef.current);
    const animate = () => {
      setPosition((prev) => {
        let next = prev + dirRef.current * 0.12;
        if (next >= 75) {
          dirRef.current = -1;
          next = 75;
        }
        if (next <= 25) {
          dirRef.current = 1;
          next = 25;
        }
        return next;
      });
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    startAuto();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const getPos = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    return Math.min(
      Math.max(((clientX - rect.left) / rect.width) * 100, 0),
      100,
    );
  };

  const startDrag = (clientX) => {
    isDragging.current = true;
    cancelAnimationFrame(animRef.current);
    setPosition(getPos(clientX));
  };

  const onDrag = (clientX) => {
    if (!isDragging.current) return;
    setPosition(getPos(clientX));
  };

  const stopDrag = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    startAuto();
  };

  // Attach move/up to window so drag works even if cursor leaves the element
  useEffect(() => {
    const onMouseMove = (e) => onDrag(e.clientX);
    const onMouseUp = () => stopDrag();
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div
      ref__={containerRef}
      className="ba-slider"
      onMouseDown={(e) => startDrag(e.clientX)}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      onTouchMove={(e) => onDrag(e.touches[0].clientX)}
      onTouchEnd={stopDrag}
    >
      <img
        src={beforeSrc}
        alt="Before"
        className="ba-slider__img ba-slider__img--before"
      />
      <div className="ba-slider__after-wrap" style={{ width: `${position}%` }}>
        <img
          src={afterSrc}
          alt="After"
          className="ba-slider__img ba-slider__img--after"
        />
      </div>
      <div className="ba-slider__divider" style={{ left: `${position}%` }}>
        <div className="ba-slider__line" />
        <div className="ba-slider__handle">
          <span>‹</span>
          <span>›</span>
        </div>
      </div>
      <span className="ba-slider__label ba-slider__label--before">Before</span>
      <span className="ba-slider__label ba-slider__label--after">After</span>
    </div>
  );
}

export default BeforeAfterSlider;
