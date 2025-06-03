import { useState } from 'react';
import { Button } from '../../Button/Button'
import { Icon } from '../../Icon/Icon'
import './DinamicKeyModal.css'
import { DinamicKeyInput } from '../../../DinamicKeyInput/DinamicKeyInput';
import { useModalStore } from '../../../../../store/modal-store';

export const DinamicKeyModal = () => {
  const { closeModal, resolve } = useModalStore();

  const [key, setKey] = useState('');

  const handleClean = () => {
    setKey('');
  }

  const handleNext = () => {
    resolve?.(true);
    closeModal();
  }
  return (
    <div className='dinamic-key-container'>
      <Icon name='logo_galaxy'/>
      <h1>Ingrese la clave dínamica</h1>
      <p>Encuentra la clave dínamica en tu app galaxy pay</p>
      <DinamicKeyInput  
        keyCode={key}
        setKey={setKey} 
      />
      <div className='dinamic-key-btns'>
        <button className='clean' onClick={handleClean}>borrar</button>
        <button className='next' onClick={handleNext}>continuar</button>
      </div>
    </div>
  )
}
