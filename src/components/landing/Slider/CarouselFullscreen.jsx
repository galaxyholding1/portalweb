import React, { useState, useEffect } from "react";
import "./CarouselFullscreen.css";
import turnoIcon from "../../../assets/images/banner-home.png";

const FullscreenSlider = () => {
  const slides = [
    {
      title: "Descarga la nueva app Mi Galaxy App",
      description: "Conocé cómo",
      buttonText: "Descargar app",
      image: turnoIcon,
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
    <div
      className="slider-main-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="slider-content-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider-item ${index === currentIndex ? "active" : ""}`}
            style={{
              transform: `translateX(${100 * (index - currentIndex)}%)`,
            }}
          >
            <div
              className="slider-background"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slider-overlay">
                <h2 className="slider-title">{slide.title}</h2>
                <p className="slider-description">{slide.description}</p>
                <button className="slider-cta">{slide.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-nav prev" onClick={prevSlide}>
        <span>‹</span>
      </button>
      <button className="slider-nav next" onClick={nextSlide}>
        <span>›</span>
      </button>

      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FullscreenSlider;
