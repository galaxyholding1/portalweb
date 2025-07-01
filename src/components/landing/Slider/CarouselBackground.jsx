import React, { useState, useEffect } from "react";
import "./CarouselBackground.css";
import imageBanner1 from "../../../assets/images/image_banner_two_1.svg";
import imageBanner2 from "../../../assets/images/image_banner_two_2.svg";

const CarouselBackground = () => {
  // Defines the content for each slide, including text and two images with overlays.
  const slides = [
    {
      title: "Nuestros créditos son todo ventajas", // "Our credits are all advantages"
      description:
        "Tanto si buscas mejorar tus gastos con una tarjeta de crédito como si estás pensando a largo plazo con nuestros préstamos, todas nuestras opciones de crédito son competitivas, transparentes y flexibles³.",
      image1: imageBanner1,
      image2: imageBanner2,
    },

    // ... more slides can be added here
  ];

  // State to keep track of the currently active slide's index.
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="carousel-background">
      <div className="carousel-content">
        {slides.map((slide, index) => (
          <div
            key={index}
            // Applies 'active' class to the current slide for styling.
            className={`slide-bg ${index === currentIndex ? "active" : ""}`}
            // Uses translateX to position slides, creating the carousel effect.
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
                  alt="Primera imagen" // "First image"
                  className="slide_img_one"
                />
                <div className="overlay-text">
                  <p>Pide un préstamo de hasta 30.000 €</p> {/* "Ask for a loan of up to €30,000" */}
                </div>
              </div>

              <div className="slide-container-two">
                <img
                  src={slide.image2}
                  alt="Segunda imagen" // "Second image"
                  className="slide_img_two"
                />
                <div className="overlay-text">
                  <p>Descárgate nuestra app</p> {/* "Download our app" */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots for manual navigation. */}
      <div className="pagination-bg">
        {slides.map((_, index) => (
          <button
            key={index}
            // Applies 'active' class to the current dot.
            className={`page-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)} // Updates the current slide when a dot is clicked.
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselBackground;