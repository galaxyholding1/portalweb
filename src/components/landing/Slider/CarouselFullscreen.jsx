import React, { useState, useEffect } from "react";
import "./CarouselFullscreen.css";
import turnoIcon from "../../../assets/images/image_banner1.svg";
import arrowLeft from "../../../assets/icons/arrow-circle-left.svg";
import arrowRight from "../../../assets/icons/arrow-circle-right.svg";
import { CarouselPagination } from "../../layout/Carousel/CarouselPagination/CarouselPagination";

const FullscreenSlider = () => {
  // Defines the content for each slide in the carousel.
  const slides = [
    {
      title: "Comienza a ahorrar con Galaxy Pay", // "Start saving with Galaxy Pay"
      buttonText: "descúbrelo", // "discover it"
      image: turnoIcon,
    },
    {
      title: "Comienza a ahorrar con Galaxy Pay", // "Start saving with Galaxy Pay"
      buttonText: "descúbrelo", // "discover it"
      image: turnoIcon,
    },
    // More slides can be added here following the same structure.
  ];

  // State to keep track of the current active slide's index.
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to control whether the auto-scrolling is paused (e.g., on hover).
  const [isPaused, setIsPaused] = useState(false);

  // Effect hook to handle automatic slide transitions.
  useEffect(() => {
    let interval;
    // If the carousel is not paused, set up an interval to advance slides.
    if (!isPaused) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Changes slide every 5 seconds.
    }
    // Cleanup function to clear the interval when the component unmounts or dependencies change.
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]); // Re-run effect when currentIndex or isPaused changes.

  // Advances to the next slide. Loops back to the first slide if at the end.
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Goes to the previous slide. Loops back to the last slide if at the beginning.
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div
        className="slider-container"
        onMouseEnter={() => setIsPaused(true)} // Pause carousel on mouse enter.
        onMouseLeave={() => setIsPaused(false)} // Resume carousel on mouse leave.
      >
        <div className="slider-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              // Applies 'active' class to the current slide for styling.
              className={`slide ${index === currentIndex ? "active" : ""}`}
              // Inline styles for positioning and background image.
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

        {/* Navigation arrows */}
        <button className="nav-button-fs pre" onClick={prevSlide}>
          <img src={arrowLeft} alt="arrowLeft" className="left_button_fs" />
        </button>
        <button className="nav-button-fs nex" onClick={nextSlide}>
          <img src={arrowRight} alt="arrowRight" className="right_button_fs" />
        </button>
      </div>
      {/* Carousel pagination dots component */}
      <CarouselPagination
        index={currentIndex}
        setIndex={setCurrentIndex}
        length={slides.length}
      />
    </>
  );
};

export default FullscreenSlider;