import "./Footer.css";
import { FooterBg } from "./FooterBg/FooterBg";
import { FooterSocialLinks } from "./FooterSocialLinks/FooterSocialLinks";
import { NeedHelp } from "./NeedHelp/NeedHelp";
import { Link } from 'react-router-dom';

// Footer Component
// This component renders the footer section of the website, including links to policies, regulations, and social media.
export const Footer = () => {
  return (
    <>
      <footer>
        <FooterBg/>
        <NeedHelp/>

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
        <Link to="/politicas">Políticas de privacidad</Link>
        <a href="#">Reglamento portal virtual</a>
      </div>
    </>
  );
};
