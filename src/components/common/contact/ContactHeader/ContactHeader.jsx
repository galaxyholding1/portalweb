import './ContactHeader.css'
import { Flag } from '../../Flag/Flag'
import imageContact from '../../../../assets/images/contact-image.png'

// Componente reutilizable para el header de la información del contacto
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
