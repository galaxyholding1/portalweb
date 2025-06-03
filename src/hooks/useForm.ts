import { useState } from 'react';

/**
 * Hook reutilizable para formularios.
 * 
 * @template T
 * @param {T} initialState - Estado inicial del formulario.
 * @returns {{
 *   formValues: T,
 *   handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
 * }}
 */
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