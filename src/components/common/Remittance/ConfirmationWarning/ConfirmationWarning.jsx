import { Icon } from '../../ui/Icon/Icon'
import './ConfirmationWarning.css'

// Esta advertencia sale en la pantalla de confirmación de remesas
export const ConfirmationWarning = () => {
  return (
    <div className='confirmation-warning'>
      <Icon name="triangle_warning" width={24}/>
      <p>Revisa los datos antes de confirmar la remesa</p>
    </div>
  )
}
