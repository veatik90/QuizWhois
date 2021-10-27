import * as React from 'react';
import { useState } from 'react';
import { validationField } from '../../../../../components/validation/validationField';
import { AuthField } from './interfaces';

export const useFieldEmail = (): AuthField => {
  const [value, setValue] = useState('');
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [errorValidation, setErrorValidation] = useState(true);
  const [helperText, setHelperText] = useState('');

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    const { isError, errorText } = validationField(
      ['mismatch', 'required', 'email'],
      event.target.value,
      event.target.value,
    );

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
