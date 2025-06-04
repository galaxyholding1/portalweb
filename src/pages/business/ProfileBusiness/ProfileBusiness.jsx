// Importa la librería principal de React para poder utilizar JSX y componentes
import React from "react";

// Importa el componente ProfileCard desde su ruta relativa dentro del proyecto
import { ProfileCard } from "../../../components/common/home/ProfileCard/ProfileCard";

// Importa los estilos CSS específicos para el componente MovementsBusiness
import "../MovementsBusiness/MovementsBusiness.css";

// Define y exporta el componente funcional ProfileBusiness
export const ProfileBusiness = () => {
  return (
    // Contenedor principal con una clase CSS 'space-b' que aplica estilos definidos en el CSS importado
    <div className="space-b">
      {/* Renderiza el componente ProfileCard dentro del contenedor */}
      <ProfileCard />
    </div>
  );
};
