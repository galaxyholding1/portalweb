import React, { useState, useEffect } from "react";
import "./Carousel.css";
import turnoIcon from "../../../assets/images/banner-home.png"; 
import arrowLeft from "../../../assets/icons/arrow-circle-left.svg";
import arrowRight from "../../../assets/icons/arrow-circle-right.svg";

const Carousel = () => {
  // Defines the content for each slide in the carousel.
  const slides = [
    {
      title: "Olvídate de memorizar números de cuenta", // "Forget memorizing account numbers"
      description:
        "Si usas A la mano, pásate a Nequi y disfruta de más funcionalidades. En mayo de 2025, A la mano se despide. ¡Nos vemos en Nequi!",
      buttonText: "elige tus llaves", // "choose your keys"
      image: turnoIcon,
    },
    {
      title: "Descarga la nueva app Mi Galaxy App", // "Download the new Mi Galaxy App"
      description: "Conocé cómo", // "Find out how"
      buttonText: "Descargar app", // "Download app"
      image: turnoIcon,
    },
    {
      title: 'Elige "Tus llaves" en la app Mi Galaxy App', // "Choose "Your keys" in the Mi Galaxy App"
      description: "Gestiona tus productos de manera segura", // "Manage your products securely"
      buttonText: "Conoce más", // "Learn more"
      image: turnoIcon,
    },
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
    <div
      className="carousel-fullscreen"
      onMouseEnter={() => setIsPaused(true)} // Pause carousel on mouse enter.
      onMouseLeave={() => setIsPaused(false)} // Resume carousel on mouse leave.
    >
      <div className="carousel-rounded-wrapper">
        <div
          className="carousel-contentt"
          // Applies a CSS transform to move the slides horizontally based on the current index.
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
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

      {/* Navigation arrows outside the main content wrapper */}
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