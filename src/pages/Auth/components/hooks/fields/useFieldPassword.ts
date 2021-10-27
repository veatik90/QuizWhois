import * as React from 'react';
import { useState } from 'react';
import { validationField } from '../../../../../components/validation/validationField';
import { AuthField } from './interfaces';

export const useFieldPassword = (): AuthField => {
  const [value, setValue] = useState('');
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [errorValidation, setErrorValidation] = useState(true);
  const [helperText, setHelperText] = useState('');

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    const { isError, errorText } = validationField(['required'], event.target.value);

    setValue(event.target.value);
    setErrorDisplay(isError);
    setErrorValidation(isError);
    setHelperText(errorText);
  };

  return {
    value,
    errorDisplay,
    errorValidation,
    helperText,
    handleChange,
  };
};
