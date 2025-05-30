import React, { useState, useEffect } from "react";
import "./CarouselFullscreen.css";
import turnoIcon from "../../../assets/images/image_banner1.svg";
import arrowLeft from "../../../assets/icons/arrow-circle-left.svg";
import arrowRight from "../../../assets/icons/arrow-circle-right.svg";
import { CarouselPagination } from "../../layout/Carousel/CarouselPagination/CarouselPagination";

const FullscreenSlider = () => {
  const slides = [
    {
      title: "Comienza a ahorrar con Galaxy Pay",
      buttonText: "descúbrelo",
      image: turnoIcon,
    },
    {
      title: "Comienza a ahorrar con Galaxy Pay",
      buttonText: "descúbrelo",
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
    <>
      <div
        className="slider-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="slider-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              style={{
                position: "absolute",
                backgroundImage: `url(${slide.image})`,
                transform: `translateX(${100 * (index - currentIndex)}%)`,
                backgroundSize: "cover",
              }}
            >
              <div className="slide-overlay">
                <h2>{slide.title}</h2>
                <button>{slide.buttonText}</button>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-button-fs pre" onClick={prevSlide}>
          <img src={arrowLeft} alt="arrowLeft" className="left_button_fs" />
        </button>
        <button className="nav-button-fs nex" onClick={nextSlide}>
          <img src={arrowRight} alt="arrowRight" className="right_button_fs" />
        </button>

        {/*<div className="dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div> */}
      </div>
      <CarouselPagination
        index={currentIndex}
        setIndex={setCurrentIndex}
        length={slides.length}
      />
    </>
  );
};

export default FullscreenSlider;
