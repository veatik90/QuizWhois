import React, { useState } from 'react';
import { validationField } from '../../../../../shared/utils/validation/validationField';
import { AuthField } from './interfaces';
import { ValidationTypes } from '../../../../../shared/constants/validationConstants';

export const useFieldPassword = (): AuthField => {
  const [value, setValue] = useState('');
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [errorValidation, setErrorValidation] = useState(true);
  const [helperText, setHelperText] = useState('');

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    const { isError, errorText } = validationField([ValidationTypes.REQUIRED], event.target.value);

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
