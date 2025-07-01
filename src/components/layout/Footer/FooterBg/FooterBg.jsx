import './FooterBg.css'
import Badge from '../../../../assets/ui/footer-circle.svg?react' 
import { NeedHelp } from "../NeedHelp/NeedHelp"; 

export const FooterBg = () => {
  return (
    <div className='footer-bg-container'>
      {/* Empty div, likely for layout or spacing purposes in CSS. */}
      <div></div>
      {/* Renders the SVG 'Badge' component. */}
      <Badge/>
      {/* Another empty div, likely for layout or spacing. */}
      <div></div>
    </div>
  )
}