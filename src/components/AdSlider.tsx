import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://via.placeholder.com/300x200?text=Publicidad+1",
  "https://via.placeholder.com/300x200?text=Publicidad+2",
  "https://via.placeholder.com/300x200?text=Publicidad+3",
  "https://via.placeholder.com/300x200?text=Publicidad+4",
  "https://via.placeholder.com/300x200?text=Publicidad+5",
];

interface AdSliderProps {
  speed?: number; // velocidad en milisegundos
}

const AdSlider: React.FC<AdSliderProps> = ({ speed = 8000 }) => {
  return (
    <div className="overflow-hidden w-full h-[200px] bg-white shadow-md">
      <motion.div
        className="flex"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed / 100, // velocidad en segundos
        }}
      >
        {/* Repetimos las imágenes para efecto continuo */}
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Publicidad ${index + 1}`}
            className="w-[300px] h-[200px] object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AdSlider;