import { useState } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
  const [state, setState] = useState(initialState);

  /*
  Genérico para indicar que "value" espera ser de su mismo tipo
    - si mando un string, el tipo esperado es "string"
    - si mando un booleano, el tipo esperado es "boolean"
    - si mando un arreglo, el tipo esperado es "Array"
  */
  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setState({ ...state, [field]: value });
  };

  return {
    formData: state,
    onChange,
  };
};
