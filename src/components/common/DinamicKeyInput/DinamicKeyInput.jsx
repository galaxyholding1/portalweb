import React, { useEffect } from "react";
import "./DinamicKeyInput.css";

{
  /* This is the path where it is located: http://localhost:5173/portal-personas/clave */
}

// Logic for the 6 key sections with styles and functionality
export const DinamicKeyInput = ({ keyCode, setKey }) => {
  useEffect(() => {
    window.blur();
    const handleKeyDown = (e) => {
      const key = e.key;
      if (/^\d$/.test(key) && key.length < 6) {
        setKey((prev) => [...prev, key].join(""));
      }
      if (key === "Backspace") {
        setKey((prev) => prev.slice(0, -1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyCode, setKey]);
  // Renders the 6 key sections
  return (
    <div className="contenedor-llave">
      {Array.from({ length: 6 }).map((_, i) => (
        <div className="contenedor-unitario" key={i}>
          {(keyCode ?? "").length > i ? keyCode[i] : ""}
        </div>
      ))}
    </div>
  );
};