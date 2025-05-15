import { useState } from 'react';



// Hook creado inicialmente para el formulario de login, pero se puede reutilizar en cualquier formulario
// Author: ThJuanK
export const useForm = ( initialState ) => {
  const [ formValues, setFormValues ] = useState( initialState );

  const handleInputChange = ( { target } ) => {
    setFormValues( {
      ...formValues,
      [ target.name ]: target.value
    } );
  };

  return { formValues, handleInputChange };
}