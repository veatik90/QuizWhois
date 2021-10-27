import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { validationField } from '../../../../../components/validation/validationField';
import { AuthField } from './interfaces';

export const useFieldConfirmPassword = (passwordValue: string): AuthField => {
  const [value, setValue] = useState('');
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [errorValidation, setErrorValidation] = useState(true);
  const [helperText, setHelperText] = useState('');
  const firstRender = useRef(false);

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  useEffect((): void => {
    const validationConfirmPassword = validationField(['mismatch'], value, passwordValue);

    if (firstRender.current) {
      setErrorDisplay(validationConfirmPassword.isError);
      setErrorValidation(validationConfirmPassword.isError);
      setHelperText(validationConfirmPassword.errorText);
    }
    firstRender.current = true;
  }, [value, passwordValue]);

  return {
    value,
    errorDisplay,
    errorValidation,
    helperText,
    handleChange,
  };
};
