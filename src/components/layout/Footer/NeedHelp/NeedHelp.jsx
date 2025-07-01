import { useState } from "react";
import Logo from "../../../../assets/icons/galaxy_logo_notext.svg";
import "./NeedHelp.css";

export const NeedHelp = () => {
  // `hover` state controls the visibility and scale of the tooltip.
  const [hover, setHover] = useState(false);
  
  const handleMouseLeave = () => {
    if( hover ) return; // Prevents re-triggering if already in a hover-initiated state.
    setTimeout(() => setHover(true), 750); // Show tooltip after 750ms.
    setTimeout(() => setHover(false), 10000); // Hide tooltip after 10 seconds (relative to initial mouse leave).
  }

  return (
    <>
      {/* Tooltip container, its scale is animated based on the `hover` state. */}
      <div className="tooltip-container" style={{ scale: hover ? 0 : 1 }}>
        <div className="tooltip">¿Necesitas ayuda?</div> {/* "Need help?" */}
      </div>
      {/* Button with the logo, triggers `handleMouseLeave` when the mouse leaves its area. */}
      <button className="btn-need-help" onMouseLeave={handleMouseLeave}>
        <img src={Logo} alt=""/> {/* Displays the Galaxy logo. */}
      </button>
    </>
  );
};