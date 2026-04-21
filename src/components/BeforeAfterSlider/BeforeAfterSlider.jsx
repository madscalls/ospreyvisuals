import { useState, useRef, useEffect } from "react";

function BeforeAfterSlider({ beforeSrc, afterSrc }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const animRef = useRef(null);
  const dirRef = useRef(1);
  const posRef = useRef(50);

  const startAuto = () => {
    cancelAnimationFrame(animRef.current);
    const animate = () => {
      posRef.current += dirRef.current * 0.12;
      if (posRef.current >= 75) {
        dirRef.current = -1;
        posRef.current = 75;
      }
      if (posRef.current <= 25) {
        dirRef.current = 1;
        posRef.current = 25;
      }
      setPosition(posRef.current);
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    startAuto();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const getPos = (clientX) => {
    if (!containerRef.current) return posRef.current;
    const rect = containerRef.current.getBoundingClientRect();
    return Math.min(
      Math.max(((clientX - rect.left) / rect.width) * 100, 0),
      100,
    );
  };

  // Use refs so window listeners always have fresh functions
  const onDragRef = useRef(null);
  const stopDragRef = useRef(null);

  onDragRef.current = (clientX) => {
    if (!isDragging.current) return;
    const p = getPos(clientX);
    posRef.current = p;
    setPosition(p);
  };

  stopDragRef.current = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    startAuto();
  };

  useEffect(() => {
    const onMouseMove = (e) => onDragRef.current(e.clientX);
    const onMouseUp = () => stopDragRef.current();
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const startDrag = (clientX) => {
    isDragging.current = true;
    cancelAnimationFrame(animRef.current);
    const p = getPos(clientX);
    posRef.current = p;
    setPosition(p);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => {
        e.preventDefault();
        startDrag(e.clientX);
      }}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      onTouchMove={(e) => {
        e.preventDefault();
        onDragRef.current(e.touches[0].clientX);
      }}
      onTouchEnd={() => stopDragRef.current()}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "20px",
        cursor: "ew-resize",
        userSelect: "none",
      }}
    >
      {/* Before image */}
      <img
        src={beforeSrc}
        alt="Before"
        draggable={false}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          pointerEvents: "none",
        }}
      />

      {/* After image revealed by clip */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: `${position}%`,
          overflow: "hidden",
        }}
      >
        <img
          src={afterSrc}
          alt="After"
          draggable={false}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: containerRef.current
              ? containerRef.current.getBoundingClientRect().width + "px"
              : "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            pointerEvents: "none",
            maxWidth: "none",
          }}
        />
      </div>

      {/* Divider line + handle */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: `${position}%`,
          height: "100%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "3px",
            height: "100%",
            background: "#ff7a1a",
            boxShadow: "0 0 8px rgba(255,122,26,0.6)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "42px",
            height: "42px",
            background: "#ff7a1a",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2px",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.1rem",
            boxShadow: "0 2px 12px rgba(255,122,26,0.5)",
          }}
        >
          <span>‹</span>
          <span>›</span>
        </div>
      </div>

      {/* Labels */}
      <span
        style={{
          position: "absolute",
          bottom: "14px",
          right: "14px",
          background: "rgba(0,0,0,0.45)",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          padding: "4px 10px",
          borderRadius: "20px",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}
      >
        Before
      </span>
      <span
        style={{
          position: "absolute",
          bottom: "14px",
          left: "14px",
          background: "rgba(0,0,0,0.45)",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          padding: "4px 10px",
          borderRadius: "20px",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}
      >
        After
      </span>
    </div>
  );
}

export default BeforeAfterSlider;
