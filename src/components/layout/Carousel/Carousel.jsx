import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "../../common/ui/Icon/Icon";
import "./Carousel.css";
import { CarouselPagination } from "./CarouselPagination/CarouselPagination";

export const Carousel = ({ components }) => {
  const [index, setIndex] = useState(0);
  const [oldIndex, setOldIndex] = useState(0);

  const next = () => {
    if (index > components.length - 1) return;

    setOldIndex(index);
    setIndex(index + 1);
  };

  const prev = () => {
    if (index == 0) return;
    setOldIndex(index);
    setIndex(index - 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <button
          onClick={prev}
          disabled={index === 0}
          className="carousel-button prev"
        >
          <Icon name="leftarrow" color={index === 0 ? "gray" : "text"} width={50} />
        </button>

        <div className="carousel-item">
          {components.map((component, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                x: i === index ? 0 : i < index ? -100 : 100,
                opacity: i === index ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 left-0 w-full"
              style={{ display: i === index ? "block" : "none" }}
            >
              {component}
            </motion.div>
          ))}
        </div>

        <button
          onClick={next}
          className="carousel-button"
          disabled={index === components.length - 1}
        >
          <Icon
            width={50}
            name="rightarrow"
            color={index === components.length - 1 ? "gray" : "text"}
          />
        </button>
      </div>
      <CarouselPagination
        index={index}
        setIndex={setIndex}
        length={components.length}
      />
    </div>
  );
};
