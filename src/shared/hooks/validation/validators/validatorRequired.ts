import { EMPTY_FIELDS } from './components/constants';
import { ValidationField } from '../interfaces';
import { validatorHasError, validatorHasNotError } from './components/validatorResult';

export const validatorRequired = (fieldValue: string): ValidationField => {
  if (fieldValue.length === 0) {
    return validatorHasError(EMPTY_FIELDS);
  }
  return validatorHasNotError();
};
