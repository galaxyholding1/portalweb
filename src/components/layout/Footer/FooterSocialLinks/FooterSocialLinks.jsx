import { useTheme } from '../../../../store/theme-store';
import LightIcon from '../../../../assets/icons/logo_galaxy.svg'
import DarkIcon from '../../../../assets/icons/logo_galaxy_dark.svg'
import './FooterSocialLinks.css';
import { SocialMediaLinks } from '../../../common/SocialMediaLinks/SocialMediaLinks';

export const FooterSocialLinks = () => {
  // Accesses the current theme ('light' or 'dark') from the theme store.
  const { theme } = useTheme();
  // Selects the appropriate logo icon based on the current theme.
  const icon = theme === 'light' ? LightIcon : DarkIcon;

  return (
    <div className="footer-social-container">
      <div>
        {/* Renders the selected logo image. */}
        <img src={icon}/>
      </div>
      <span>
        {/* Renders the SocialMediaLinks component, which contains the actual social media icons/links. */}
        <SocialMediaLinks/>
      </span>
    </div>
  )
}