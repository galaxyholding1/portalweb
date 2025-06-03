import { useState } from 'react';

// Author: Juan Ayala
// Este hook permite realizar más facilmente formularios, desde grandes a pequeños
// Sin importar el tipo de entrada. Es util proporcionar el valor inicial de un valor 
// tipado, es lo más conveniente para tipear.
export const useForm = <T>(initialState: T) => {
  const [formValues, setFormValues] = useState<T>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const setValue = (values: Partial<T>) => {
    setFormValues((oldValues) => ({...values, ...oldValues}))
  }

  const clear = () => {
    setFormValues(initialState)
  }

  return { formValues, handleInputChange, clear, setValue };
}