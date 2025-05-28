import React, { useState } from "react";
import "./CarouselCards.css";
import { CarouselPagination } from "../CarouselPagination/CarouselPagination";

export const CarouselCards = ({ cards }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="carousel-cards-container">
      <div className="carousel-cards-content">
        {cards.map((card, i) => (
          <div
            className={`carousel-cards-card`}
            onClick={() => setIndex(i)}
            style={{ 
              scale: index == i ? 1 : 0.85,
              transform: `translateX(${ 115 * ( i - index ) }%)`,
            }}
          >
            {card}
          </div>
        ))}
      </div>
      <div className="carousel-cards-pagination" >
        <CarouselPagination
          index={index}
          setIndex={setIndex}
          length={cards.length}
        />
      </div>
    </div>
  );
};
