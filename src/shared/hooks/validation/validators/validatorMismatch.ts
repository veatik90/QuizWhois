import { EMPTY_FIELDS, PASSWORD_MISMATCH } from './components/constants';
import { ValidationField } from '../interfaces';
import { validatorHasError, validatorHasNotError } from './components/validatorResult';

export const validatorMismatch = (value: string, valueComparison?: string): ValidationField => {
  if (valueComparison === undefined) {
    throw new SyntaxError('valueComparison not passed to function');
  }

  if (value === '') {
    return validatorHasError(EMPTY_FIELDS);
  }
  if (value !== valueComparison) {
    return validatorHasError(PASSWORD_MISMATCH);
  }
  return validatorHasNotError();
};
