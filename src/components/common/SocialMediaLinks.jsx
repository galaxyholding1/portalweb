import facebookIcon from "../../assets/images/SVG/facebook-icon.svg";
import instagramIcon from "../../assets/images/SVG/instagram-icon.svg";
import xIcon from "../../assets/images/SVG/x-icon.svg";

import facebookIconGlow from "../../assets/images/SVG/facebook-icon-white.svg";
import instagramIconGlow from "../../assets/images/SVG/instagram-icon-white.svg";
import xIconGlow from "../../assets/images/SVG/x-icon-white.svg";

const socialIcons = [
  { imgPath: facebookIcon, href: "/" },
  { imgPath: instagramIcon, href: "/" },
  { imgPath: xIcon, href: "/" },
];

const socialIconsGlow = [
  { imgPath: facebookIconGlow, href: "/" },
  { imgPath: instagramIconGlow, href: "/" },
  { imgPath: xIconGlow, href: "/" },
];

export const SocialMediaLinks = ({light}) => {
  const icons = light ? socialIconsGlow : socialIcons;
  return icons.map(({ href, imgPath }, i) => (
    <a href={href} key={i + href}>
      <img src={imgPath} alt={""} className="social-media-icon" />
    </a>
  ));
};
