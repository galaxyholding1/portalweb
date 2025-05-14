import facebookIcon from "../../../assets/icons/facebook_icon.svg";
import instagramIcon from "../../../assets/icons/instagram_icon.svg";
import xIcon from "../../../assets/icons/x_icon.svg";

import facebookIconGlow from "../../../assets/icons/facebook_icon_dark.svg";
import instagramIconGlow from "../../../assets/icons/instagram_icon_dark.svg";
import xIconGlow from "../../../assets/icons/x_icon_dark.svg";

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
  return (
    <span style={{display: "flex", gap: ".5rem"}}>
      {icons.map(({ href, imgPath }, i) => (
        <a href={href} key={i + href}>
          <img src={imgPath} alt={""} className="social-media-icon" />
        </a>
      ))}
    </span>
  )
};
