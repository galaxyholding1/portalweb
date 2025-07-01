import { useState } from 'react';
import { Button } from '../../Button/Button'
import { Icon } from '../../Icon/Icon'
import './DinamicKeyModal.css'
import { DinamicKeyInput } from '../../../DinamicKeyInput/DinamicKeyInput';
import { useModalStore } from '../../../../../store/modal-store';

/**
 * DinamicKeyModal Component
 */
export const DinamicKeyModal = () => {
  // Destructures `closeModal` and `resolve` functions from the modal store.
  const { closeModal, resolve } = useModalStore();

  // State to store the dynamic key entered by the user.
  const [key, setKey] = useState('');

  // Clears the dynamic key input field.
  const handleClean = () => {
    setKey('');
  }

  // Handles the "continue" action: resolves the modal with 'true' and closes it.
  const handleNext = () => {
    resolve?.(true); // Resolves the promise associated with the modal, indicating success.
    closeModal(); // Closes the modal.
  }

  return (
    <div className='dinamic-key-container'>
      <Icon name='logo_galaxy'/>
      <h1>Ingrese la clave dínamica</h1> {/* "Enter the dynamic key" */}
      <p>Encuentra la clave dínamica en tu app galaxy pay</p> {/* "Find the dynamic key in your Galaxy Pay app" */}
      <DinamicKeyInput  
        keyCode={key}
        setKey={setKey} 
      />
      <div className='dinamic-key-btns'>
        <button className='clean' onClick={handleClean}>borrar</button> {/* "clear" */}
        <button className='next' onClick={handleNext}>continuar</button> {/* "continue" */}
      </div>
    </div>
  )
}