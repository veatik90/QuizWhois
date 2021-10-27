import { EMPTY_FIELDS, PASSWORD_MISMATCH } from './components/constants';
import { ValidationField } from '../interfaces';

export const mismatch = (value: string, valueComparison: string | undefined): ValidationField => {
  if (valueComparison === undefined) {
    throw new SyntaxError('valueComparison not passed to function');
  }

  let isError = false;
  let errorText = '';
  if (value === '') {
    isError = true;
    errorText = EMPTY_FIELDS;
  } else if (value !== valueComparison) {
    isError = true;
    errorText = PASSWORD_MISMATCH;
  }

  return {
    isError,
    errorText,
  };
};
