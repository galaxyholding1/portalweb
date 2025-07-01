import React, { useState } from "react";
import "./Select.css"; // Importa los estilos específicos para el componente
import { Icon } from "../../ui/Icon/Icon"; // Importa el componente de ícono

// Componente funcional Select personalizado
export const Select = ({ options, onChange, className, placeholder }) => {
  // Construye el nombre de clase combinando la clase base y la opcional pasada por props
  const newClassName = className
    ? "custom-select-container " + className
    : "custom-select-container";

  // Estado local que podría usarse para cambiar la orientación del ícono (no funcional aún)
  // Se agrega en base a css (clase reverse)
  const [open, setOpen] = useState(false);

  // Manejador de cambio del select (se activa con onClick, lo cual es inusual)
  const handleChange = (e) => {
    setOpen(!open); // Alterna el estado de "open"
    if (onChange) {
      onChange(e); // Ejecuta la función onChange pasada por props, si existe
    }
  };

  return (
    // Contenedor con clase dinámica
    <label className={newClassName}>
      {/* Elemento <select> estilizado */}
      <select
        name="" // No se está usando un nombre específico
        id="" // Tampoco se asigna un id
        className="select-remittance"
        onClick={handleChange} // Usa onClick en lugar de onChange (no común para selects)
      >
        {/* Renderiza el placeholder como opción deshabilitada */}
        {placeholder && (
          <option value={null} disabled selected>
            {placeholder}
          </option>
        )}

        {/* Mapea las opciones para renderizarlas en el select */}
        {options.map((option, index) => (
          <option key={index} value={option.value} onChange={onChange}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Ícono decorativo, rota si el estado "open" está activo */}
      <Icon name="chevron_down" width={20} className={open ? "reverse" : ""} />
    </label>
  );
};
