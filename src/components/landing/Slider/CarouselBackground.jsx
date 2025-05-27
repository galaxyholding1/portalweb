import React, { useState, useEffect } from "react";
import "./CarouselBackground.css";
import imageBanner1 from "../../../assets/images/image_banner_two_1.svg";
import imageBanner2 from "../../../assets/images/image_banner_two_2.svg";

const CarouselBackground = () => {
  const slides = [
    {
      title: "Nuestros créditos son todo ventajas",
      description:
        "Tanto si buscas mejorar tus gastos con una tarjeta de crédito como si estás pensando a largo plazo con nuestros préstamos, todas nuestras opciones de crédito son competitivas, transparentes y flexibles³.",
      image1: imageBanner1,
      image2: imageBanner2,
    },

    // ... más slides
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

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
            </div>
            <div className="dual-images">
              <div className="slide-container-one">
                <img
                  src={slide.image1}
                  alt="Primera imagen"
                  className="slide_img_one"
                />
                <div className="overlay-text">
                  <p>Pide un préstamo de hasta 30.000 €</p>
                </div>
              </div>

              <div className="slide-container-two">
                <img
                  src={slide.image2}
                  alt="Segunda imagen"
                  className="slide_img_two"
                />
                <div className="overlay-text">
                  <p>Descárgate nuestra app</p>
                </div>
              </div>
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
