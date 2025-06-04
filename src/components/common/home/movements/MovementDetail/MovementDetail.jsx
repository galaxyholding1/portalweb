import React from "react";

// Logica de los detalles de movimientos con título y descripción
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
