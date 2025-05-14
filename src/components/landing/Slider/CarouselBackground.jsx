import React, { useState, useEffect } from "react";
import "./CarouselBackground.css";
import turnoIcon from "../../../assets/images/banner-home.png";
const CarouselBackground = () => {
  const slides = [
    {
      title: 'Elige "Tus llaves"',
      description: "Gestiona tus productos de manera segura",
      buttonText: "Conoce más",
      image1: turnoIcon,
      image2: turnoIcon,
    },
    {
      title: 'Elige "Tus llaves2"',
      description: "Gestiona tus productos de manera segura",
      buttonText: "Conoce más",
      image1: turnoIcon,
      image2: turnoIcon,
    },
    // ... más slides
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-background">
      <div className="carousel-content">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide-bg ${index === currentIndex ? "active" : ""}`}
            style={{
              transform: `translateX(${100 * (index - currentIndex)}%)`,
            }}
          >
            <div className="text-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button className="cta-button">{slide.buttonText}</button>
            </div>
            <div className="dual-images">
              <img src={slide.image1} alt="Primera imagen" />
              <img src={slide.image2} alt="Segunda imagen" />
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-bg">
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

export default CarouselBackground;
