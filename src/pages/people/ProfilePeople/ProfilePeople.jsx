import React from "react";
import { ProfileCard } from "../../../components/common/home/ProfileCard/ProfileCard";
import "../../business/MovementsBusiness/MovementsBusiness.css";

// This section calls the different components to display them on the page
export const ProfilePeople = () => {
  return (
    <div className="space-b">
      <ProfileCard />
    </div>
  );
};