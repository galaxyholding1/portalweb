import React, { useState, useEffect } from "react";
import "./CarouselFullscreen.css";

const CarouselFullscreen = () => {
  const slides = [
    {
      title: "Descarga la nueva app",
      description: "Conocé cómo",
      buttonText: "Descargar app",
      image: "/path/to/image2.jpg",
    },
    // ... más slides
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-fullscreen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide-full ${index === currentIndex ? "active" : ""}`}
          style={{
            transform: `translateX(${100 * (index - currentIndex)}%)`,
          }}
        >
          <div
            className="slide-background"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="content-overlay">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button className="cta-button">{slide.buttonText}</button>
            </div>
          </div>
        </div>
      ))}

      <button className="nav-button-internal prev" onClick={prevSlide}>
        <span>‹</span>
      </button>
      <button className="nav-button-internal next" onClick={nextSlide}>
        <span>›</span>
      </button>

      <div className="pagination-full">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`page-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselFullscreen;
