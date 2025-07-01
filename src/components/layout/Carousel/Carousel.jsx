import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "../../common/ui/Icon/Icon";
import "./Carousel.css";
import { CarouselPagination } from "./CarouselPagination/CarouselPagination";

export const Carousel = ({ components }) => {
  // `index` tracks the currently active slide.
  const [index, setIndex] = useState(0);
  // `oldIndex` is stored (though not directly used in the provided JSX for animation logic),
  // potentially for more complex exit animations or tracking direction.
  const [oldIndex, setOldIndex] = useState(0);

  /**
   * Advances the carousel to the next slide.
   * If already at the last slide, it does nothing.
   */
  const next = () => {
    if (index >= components.length - 1) return; // Prevents going beyond the last slide.

    setOldIndex(index); // Stores the current index as oldIndex.
    setIndex(index + 1); // Moves to the next slide.
  };

  const prev = () => {
    if (index === 0) return; // Prevents going before the first slide.
    
    setOldIndex(index); // Stores the current index as oldIndex.
    setIndex(index - 1); // Moves to the previous slide.
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        {/* Previous button */}
        <button
          onClick={prev}
          // Button is disabled if currently on the first slide.
          disabled={index === 0}
          className="carousel-button prev"
        >
          {/* Icon color changes based on whether the button is disabled. */}
          <Icon name="leftarrow" color={index === 0 ? "gray" : "text"} width={50} />
        </button>

        <div className="carousel-item">
          {/* Renders each component as a slide with Framer Motion animations. */}
          {components.map((component, i) => (
            <motion.div
              key={i}
              initial={false} // Prevents initial animation on mount if you want to control it differently
              // Animates X position and opacity based on whether it's the current slide or not.
              animate={{
                x: i === index ? 0 : (i < index ? -100 : 100), // Current slide is at 0, previous at -100, next at 100.
                opacity: i === index ? 1 : 0, // Current slide is visible, others are transparent.
              }}
              transition={{ duration: 0.4 }} // Animation duration.
              className="absolute top-0 left-0 w-full" // Styles for positioning.
              style={{ display: i === index ? "block" : "none" }} // Hides non-current slides from screen readers/layout.
            >
              {component} {/* The actual component/slide content. */}
            </motion.div>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="carousel-button"
          // Button is disabled if currently on the last slide.
          disabled={index === components.length - 1}
        >
          {/* Icon color changes based on whether the button is disabled. */}
          <Icon
            width={50}
            name="rightarrow"
            color={index === components.length - 1 ? "gray" : "text"}
          />
        </button>
      </div>
      {/* Pagination dots for direct slide navigation. */}
      <CarouselPagination
        index={index}
        setIndex={setIndex}
        length={components.length}
      />
    </div>
  );
};