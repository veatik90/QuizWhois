import { useState, useEffect } from 'react';
import { validateForm } from '../validateForm';
import { FormValidation } from './interfaces';

export const useFormValidation = (validations: boolean[]): FormValidation => {
  const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);

  useEffect(() => {
    if (validateForm(validations)) {
      setIsDisabledSubmit(true);
    } else {
      setIsDisabledSubmit(false);
    }
  }, [validations]);

  const handleResetValidation = () => {
    setIsDisabledSubmit(true);
  };

  return {
    isDisabledSubmit,
    resetValidation: handleResetValidation,
  };
};
