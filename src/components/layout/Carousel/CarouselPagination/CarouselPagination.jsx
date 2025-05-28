import React from "react";

export const CarouselPagination = ({index, setIndex, length}) => {
  return (
    <div className="carousel-indicator">
      {Array.from({length}).map((_, i) => (
        <span
          key={i}
          className={`carousel-dot ${index === i ? "active" : ""}`}
          onClick={() => setIndex(i)}
        ></span>
      ))}
    </div>
  );
};
