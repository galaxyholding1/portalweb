import { useTheme } from '../../../../store/theme-store';
import LightIcon from '../../../../assets/icons/logo_galaxy.svg'
import DarkIcon from '../../../../assets/icons/logo_galaxy_dark.svg'

import './FooterSocialLinks.css';
import { SocialMediaLinks } from '../../../common/SocialMediaLinks/SocialMediaLinks';

export const FooterSocialLinks = () => {
  const { theme } = useTheme();
  const icon = theme === 'light' ? LightIcon : DarkIcon;
  return (
    <div className="footer-social-container">
      <div>
        <img src={icon}/>
      </div>
      <span>
        <SocialMediaLinks/>
      </span>
    </div>
  )
}
