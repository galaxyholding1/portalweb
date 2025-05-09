import "./Footer.css";
import { FooterSocialLinks } from "./FooterSocialLinks/FooterSocialLinks";
import { NeedHelp } from "./NeedHelp/NeedHelp";

export const Footer = () => {
  return (
    <>
      <footer>
        <NeedHelp />

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

        <FooterSocialLinks />
      </footer>
      <div className="footer-terms">
        <a href="#">Reglamento portal virtual</a>
        <a href="#">Politicas de privacidad</a>
      </div>
    </>
  );
};
