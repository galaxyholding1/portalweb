import { useState } from "react";
import Logo from "../../../../assets/icons/galaxy_logo_notext.svg";
import "./NeedHelp.css";

export const NeedHelp = () => {
  const [hover, setHover] = useState(false);
  
  const handleMouseLeave = () => {
    if( hover ) return;
    setTimeout(() => setHover(true), 750);
    setTimeout(() => setHover(false), 10000);
  }

  return (
    <>
      <div className="tooltip-container" style={{ scale: hover ? 0 : 1 }}>
        <div className="tooltip">¿Necesitas ayuda?</div>
      </div>
      <button className="btn-need-help" onMouseLeave={handleMouseLeave}>
        <img src={Logo} alt=""/>
      </button>
    </>
  );
};
