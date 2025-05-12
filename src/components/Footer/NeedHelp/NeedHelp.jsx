import { useState } from "react";
import Logo from "../../../assets/images/SVG/galaxy-logo-notext.svg";
import "./NeedHelp.css";

export const NeedHelp = () => {
  const [hover, setHover] = useState(false);
  const handleMouseOver = () => {
    if( !hover ) {
      setTimeout(() => {
        setHover(true);
      }, 1500);
    }
  }

  return (
    <>
      <div className="tooltip-container" style={{ scale: hover ? 0 : 1 }}>
        <div className="tooltip">¿Necesitas ayuda?</div>
      </div>
      <button className="btn-need-help" onMouseOver={handleMouseOver}>
        <img src={Logo} alt=""/>
      </button>
    </>
  );
};
