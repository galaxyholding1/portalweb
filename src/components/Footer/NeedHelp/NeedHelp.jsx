import Logo from "../../../assets/images/SVG/galaxy-logo-notext.svg";
import "./NeedHelp.css";

export const NeedHelp = () => {
  return (
    <button className="btn-need-help">
      <img src={Logo} alt=""/>
    </button>
  );
};
