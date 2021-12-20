import React, { useState, useEffect, useRef } from 'react';
import { validationField } from '../../../../shared/hooks/validation/validationField';
import { AuthField } from './interfaces';
import { ValidationTypes } from '../../../../shared/constants/validationConstants';

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
    const validationConfirmPassword = validationField([ValidationTypes.MISMATCH], value, passwordValue);

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
