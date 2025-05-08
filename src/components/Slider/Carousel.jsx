import React, { useState, useEffect } from "react";
import "./Carousel.css";
import turnoIcon from "../../assets/images/SVG/banner-home.png";
const Carousel = () => {
  const slides = [
    {
      title: "Abre tu cuenta de ahorros desde $0",
      description:
        "Saca tu cuenta por Internet, desde el celular. Elige el plan que prefieras con cuota de manejo desde cero pesos, incluso cuenta nómina. Recibe la tarjeta gratis en casa.",
      buttonText: "Abre tu cuenta",
      image: turnoIcon,
    },
    {
      title: "Descarga la nueva app Mi Galaxy App",
      description: "Conocé cómo",
      buttonText: "Descargar app",
      image: turnoIcon,
    },
    {
      title: 'Elige "Tus llaves" en la app Mi Galaxy App',
      description: "Gestiona tus productos de manera segura",
      buttonText: "Conoce más",
      image: turnoIcon,
    },
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
      className="carousel-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
            style={{
              transform: `translateX(${100 * (index - currentIndex)}%)`,
            }}
          >
            <div className="slide-content">
              <div className="text-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button className="cta-button">{slide.buttonText}</button>
              </div>
              <div className="image-content">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          </div>
        ))}

        <button className="carousel-button prev" onClick={prevSlide}>
          <span>‹</span>
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          <span>›</span>
        </button>

        <div className="progress-indicators">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
