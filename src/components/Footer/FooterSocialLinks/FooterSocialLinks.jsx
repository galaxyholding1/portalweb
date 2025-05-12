import LightIcon from '../../../assets/images/SVG/logo-galaxy.svg'
import DarkIcon from '../../../assets/images/SVG/logo-galaxy-dark.svg'
import { useTheme } from '../../../store/theme-store'
import { SocialMediaLinks } from '../../common/SocialMediaLinks';
import './FooterSocialLinks.css';

export const FooterSocialLinks = () => {
  const { theme } = useTheme();
  const icon = theme === 'light' ? LightIcon : DarkIcon;
  return (
    <div className="footer-social-container">
      <div>
        <img src={icon}/>
      </div>
      <span>
        <SocialMediaLinks light/>
      </span>
    </div>
  )
}
