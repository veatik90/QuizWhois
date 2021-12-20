import { ValidationField } from '../../interfaces';

export const validatorHasError = (errorText: string): ValidationField => {
  return {
    isError: true,
    errorText,
  };
};

export const validatorHasNotError = (): ValidationField => {
  return {
    isError: false,
    errorText: '',
  };
};
