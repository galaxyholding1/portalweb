import "./Footer.css";
import { useTheme } from "../../store/theme-store";
import { iconByTheme } from "../../util/app-icon-by-theme";

export const Footer = () => {

  const { theme } = useTheme();

  return (
    <footer>
      <div className="footer-logo">
        <img src={iconByTheme[theme]} alt="Galaxy Icon" />
      </div>

      <div className="footer-links">
        <div>
          <a href="#">Politicas</a>
          <a href="#">Reglamento</a>
          <a href="#">Galaxy Pay</a>
          <a href="#">Lorem Ipsum</a>
          <a href="#">dolor sit amet</a>
          <a href="#">consectetur adipisicing</a>
        </div>

        <hr />
        <div>
          <a href="#">Politicas</a>
          <a href="#">Reglamento</a>
          <a href="#">Galaxy Pay</a>
          <a href="#">Lorem Ipsum</a>
          <a href="#">dolor sit amet</a>
          <a href="#">consectetur adipisicing</a>
        </div>

        <hr />
        <div>
          <a href="#">Politicas</a>
          <a href="#">Reglamento</a>
          <a href="#">Galaxy Pay</a>
          <a href="#">Lorem Ipsum</a>
          <a href="#">dolor sit amet</a>
          <a href="#">consectetur adipisicing</a>
        </div>

        <hr />
        <div>
          <a href="#">Politicas</a>
          <a href="#">Reglamento</a>
          <a href="#">Galaxy Pay</a>
          <a href="#">Lorem Ipsum</a>
          <a href="#">dolor sit amet</a>
          <a href="#">consectetur adipisicing</a>
        </div>

        <hr />
        <div>
          <a href="#">Politicas</a>
          <a href="#">Reglamento</a>
          <a href="#">Galaxy Pay</a>
          <a href="#">Lorem Ipsum</a>
          <a href="#">dolor sit amet</a>
          <a href="#">consectetur adipisicing</a>
        </div>
      </div>

      <div className="footer-terms">
        <a href="#">Reglamento portal virtual</a>
        <a href="#">Politicas de privacidad</a>
      </div>
    </footer>
  );
};
