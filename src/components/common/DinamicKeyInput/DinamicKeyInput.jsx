import React, { useEffect, useState } from "react";
import "./DinamicKeyInput.css";
import logoGalaxy from "../../../assets/icons/logo_galaxy.svg";

{/*  Esta es la ruta en donde esta http://localhost:5173/portal-personas/clave   */ }

export const DinamicKeyInput = () => {
  const [clave, setClave] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if (/^\d$/.test(key) && clave.length < 6) {
        setClave((prev) => [...prev, key]);
      }

      if (key === "Backspace") {
        setClave((prev) => prev.slice(0, -1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [clave]);

  return (
    <div className="contenedor-llave">
      {Array.from({ length: 6 }).map((_, i) => (
        <div className="contenedor-unitario" key={i}>
          {clave[i] || ""}
        </div>
      ))}
    </div>
  );
};
