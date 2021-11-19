import { useState, useEffect } from 'react';
import { validateForm } from '../../../../../shared/utils/validation/validateForm';
import { FormValidation } from './interfaces';

export const useFormValidation = (
  emailError: boolean,
  passwordError: boolean,
  confirmPasswordError?: boolean,
): FormValidation => {
  const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);

  useEffect(() => {
    let isErrors = [emailError, passwordError];
    if (confirmPasswordError !== undefined) {
      isErrors = [emailError, passwordError, confirmPasswordError];
    }
    const hasErrors = validateForm(isErrors);

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
