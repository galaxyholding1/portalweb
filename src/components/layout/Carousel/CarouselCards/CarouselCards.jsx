import React, { useState } from "react";
import "./CarouselCards.css";
import { CarouselPagination } from "../CarouselPagination/CarouselPagination";

export const CarouselCards = ({ cards }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="carousel-cards-container">
      <div className="carousel-cards-content">
        {/* Maps over the `cards` array to render each card. */}
        {cards.map((card, i) => (
          <div
            key={i} // Using index as key, consider a unique ID if cards can be reordered or removed.
            className={`carousel-cards-card`}
            onClick={() => setIndex(i)} // Clicking a card makes it the active one.
            // Inline styles for scaling and translation to create the carousel effect.
            // `scale`: Active card (index == i) is at full size (1), others are scaled down to 0.85.
            // `transform`: Translates cards horizontally to center the active one and position others.
            // The `115%` value dictates the spacing and overlap between cards.
            style={{
              transform: `translate(${115 * (i - index)}%, 0) scale(${
                index == i ? 1 : 0.85
              })`,
              transformOrigin: "center center",
            }}
          >
            {card} {/* Renders the actual card content passed as a prop. */}
          </div>
        ))}
      </div>
      <div className="carousel-cards-pagination">
        {/* Renders the pagination dots for the carousel, linking to the `index` state. */}
        <CarouselPagination
          index={index}
          setIndex={setIndex}
          length={cards.length}
        />
      </div>
    </div>
  );
};
