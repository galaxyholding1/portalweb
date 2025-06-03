import React from "react";
import { ProfileCard } from "../../../components/common/home/ProfileCard/ProfileCard";
import "../../business/MovementsBusiness/MovementsBusiness.css";

// En este apartado se llama a los distintos componentes para mostrarlos en la página
export const ProfilePeople = () => {
  return (
    <div className="space-b">
      <ProfileCard />
    </div>
  );
};
