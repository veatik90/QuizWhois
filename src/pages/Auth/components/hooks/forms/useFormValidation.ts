import { useState, useEffect } from 'react';
import { validationForm } from '../../../../../components/validation/validationForm';
import { FormValidation } from './interfaces';

export const useFormValidation = (
  emailError: boolean,
  passwordError: boolean,
  confirmPasswordError?: boolean,
): FormValidation => {
  const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);

  useEffect(() => {
    let isErrors = [emailError, passwordError];
    if (typeof confirmPasswordError !== 'undefined') {
      isErrors = [emailError, passwordError, confirmPasswordError];
    }
    const hasErrors = validationForm(isErrors);

    if (hasErrors) {
      setIsDisabledSubmit(true);
    } else {
      setIsDisabledSubmit(false);
    }
  }, [emailError, passwordError, confirmPasswordError]);

  return {
    isDisabledSubmit,
  };
};
