import { WRONG_EMAIL } from './components/constants';
import { ValidationField } from '../interfaces';
import { validatorHasError, validatorHasNotError } from './components/validatorResult';

export const validatorEmail = (fieldValue: string): ValidationField => {
  const emailMask = new RegExp('.+@.+\\..+');
  if (!emailMask.test(fieldValue)) {
    return validatorHasError(WRONG_EMAIL);
  }
  return validatorHasNotError();
};
