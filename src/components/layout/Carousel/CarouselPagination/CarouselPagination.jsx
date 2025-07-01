import React from "react";

export const CarouselPagination = ({index, setIndex, length}) => {
  return (
    <div className="carousel-indicator">
      {/* Generates an array with `length` number of elements to map over and create dots. */}
      {Array.from({length}).map((_, i) => (
        <span
          key={i} // Unique key for each dot based on its index.
          // Applies the "active" class if the dot's index matches the current carousel index.
          className={`carousel-dot ${index === i ? "active" : ""}`}
          onClick={() => setIndex(i)} // When clicked, updates the carousel's index to this dot's index.
        ></span>
      ))}
    </div>
  );
};