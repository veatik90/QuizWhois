import { WRONG_EMAIL } from './components/constants';
import { ValidationField } from '../interfaces';

export const email = (fieldValue: string): ValidationField => {
  const emailMask = new RegExp('.+@.+\\..+');
  const validEmail: boolean = emailMask.test(fieldValue);
  let isError = false;
  let errorText = '';

  if (!validEmail) {
    isError = true;
    errorText = WRONG_EMAIL;
  }

  return {
    isError,
    errorText,
  };
};
