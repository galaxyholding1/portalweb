import './ContactHeader.css'
import { Flag } from '../../Flag/Flag'
import imageContact from '../../../../assets/images/contact-image.png'

// Reusable component for contact information header
export const ContactHeader = () => {
  return (
    <div className='contact-header'>
      <img src={imageContact} alt="" />
      <div className='contact-header-text'>
        <h1>Alicia Marañón Bautista</h1>
        <p>Hermana</p>
      </div>
      <Flag code="co"/>
    </div>
  )
}