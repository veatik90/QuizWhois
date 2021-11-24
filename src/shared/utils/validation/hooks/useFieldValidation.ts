import React, { useState } from 'react';
import { validationField } from '../validationField';
import { FieldName } from './interfaces';
import { Validation } from '../interfaces';

export const useFieldValidation = (validations: Validation[]): FieldName => {
  const [value, setValue] = useState('');
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [errorValidation, setErrorValidation] = useState(true);
  const [helperText, setHelperText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { isError, errorText } = validationField(validations, event.target.value);

    setValue(event.target.value);
    setErrorDisplay(isError);
    setErrorValidation(isError);
    setHelperText(errorText);
  };

  const validationSetEmptyValue = (): void => {
    const { isError } = validationField(validations, '');
    setErrorValidation(isError);
  };

  const validationSetValue = (currentValue: string): void => {
    const { isError } = validationField(validations, currentValue);
    setErrorValidation(isError);
  };

  return {
    value,
    errorDisplay,
    errorValidation,
    helperText,
    handleChange,
    validationSetEmptyValue,
    validationSetValue,
  };
};
