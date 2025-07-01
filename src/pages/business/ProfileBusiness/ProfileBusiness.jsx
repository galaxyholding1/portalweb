// Import the main React library to use JSX and components
import React from "react";

// Import the ProfileCard component from its relative path within the project
import { ProfileCard } from "../../../components/common/home/ProfileCard/ProfileCard";

// Import specific CSS styles for the MovementsBusiness component
import "../MovementsBusiness/MovementsBusiness.css";

// Define and export the functional component ProfileBusiness
export const ProfileBusiness = () => {
  return (
    // Main container with a CSS class 'space-b' that applies styles defined in the imported CSS
    <div className="space-b">
      {/* Renders the ProfileCard component inside the container */}
      <ProfileCard />
    </div>
  );
};