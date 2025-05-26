import React, { useState, useEffect } from "react";
import "./Carousel.css";
import turnoIcon from "../../../assets/images/banner-home.png";
import arrowLeft from "../../../assets/icons/arrow-circle-left.svg";
import arrowRight from "../../../assets/icons/arrow-circle-right.svg";

const Carousel = () => {
  const slides = [
    {
      title: "Olvídate de memorizar números de cuenta",
      description:
        "Si usas A la mano, pásate a Nequi y disfruta de más funcionalidades. En mayo de 2025, A la mano se despide. ¡Nos vemos en Nequi!",
      buttonText: "elige tus llaves",
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
      className="carousel-fullscreen"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-rounded-wrapper">
        <div className="carousel-content">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              style={{
                transform: `translateX(${100 * (index - currentIndex)}%)`,
              }}
            >
              <div className="text-section">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button className="carrousel-button">
                  <a>{slide.buttonText}</a>
                </button>
              </div>
              <img
                src={slide.image}
                alt={slide.title}
                className="image-section"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Flechas fuera del contenedor */}
      <button className="nav-button prev" onClick={prevSlide}>
        <img src={arrowLeft} alt="boton_izquierdo" className="left_button" />
      </button>
      <button className="nav-button next" onClick={nextSlide}>
        <img src={arrowRight} alt="boton_derecho" className="right_button" />
      </button>
    </div>
  );
};

export default Carousel;
