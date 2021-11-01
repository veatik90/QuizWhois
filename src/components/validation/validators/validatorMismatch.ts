import { EMPTY_FIELDS, PASSWORD_MISMATCH } from './constants';
import { ValidationField } from '../interfaces';

export const validatorMismatch = (value: string, valueComparison?: string): ValidationField => {
  if (valueComparison === undefined) {
    throw new SyntaxError('valueComparison not passed to function');
  }

  // TODO: create function which return object isError.
  if (value === '') {
    return {
      isError: true,
      errorText: EMPTY_FIELDS,
    };
  }
  if (value !== valueComparison) {
    return {
      isError: true,
      errorText: PASSWORD_MISMATCH,
    };
  }

  return {
    isError: false,
    errorText: '',
  };
};
