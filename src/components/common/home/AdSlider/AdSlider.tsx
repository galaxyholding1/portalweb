import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://sucursalempresas.transaccionesbancolombia.com/bancolombia/contenido/login_BOLE_BC_Zona_B_1.jpg",
  "https://sucursalempresas.transaccionesbancolombia.com/bancolombia/contenido/login_BOLE_BC_Zona_B_2.jpg",
  "https://sucursalempresas.transaccionesbancolombia.com/bancolombia/contenido/login_BOLE_BC_Zona_B_3.jpg",
  "https://sucursalempresas.transaccionesbancolombia.com/bancolombia/contenido/login_BOLE_BC_Zona_B_2_1.jpg",
];

interface AdSliderProps {
  speed?: number; // speed in milliseconds
}

const AdSlider: React.FC<AdSliderProps> = ({ speed = 8000 }) => {
  return (
    <div className="overflow-hidden w-full h-[200px] bg-white shadow-md rounded-lg">
      <motion.div
        className="flex"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed / 1000, // speed in seconds
        }}
        style={{ display: "flex", gap: "10px", width: "fit-content" }}
      >
        {/* We repeat the images for a continuous effect */}
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Advertisement ${index + 1}`}
            className="w-[300px] h-[200px] object-cover"
            style={{ minWidth: "300px" }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AdSlider;