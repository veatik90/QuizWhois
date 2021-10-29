import { WRONG_EMAIL } from './constants';
import { ValidationField } from '../interfaces';

export const validatorEmail = (fieldValue: string): ValidationField => {
  const emailMask = new RegExp('.+@.+\\..+');
  let isError = false;
  let errorText = '';

  if (!emailMask.test(fieldValue)) {
    isError = true;
    errorText = WRONG_EMAIL;
  }

  return {
    isError,
    errorText,
  };
};
