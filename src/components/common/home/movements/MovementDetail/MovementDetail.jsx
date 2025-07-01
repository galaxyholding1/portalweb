import React from "react";

// Logic for movement details with title and description
export const MovementDetail = ({items}) => {
  return (
    <div className="movement-section">
      {items.map(({ title, description }, index) => (
        <div key={index} className="movement-item">
          {title && (
            <span className="movement-title">
              {title}: {description}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};