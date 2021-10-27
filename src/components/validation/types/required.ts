import { EMPTY_FIELDS } from './components/constants';
import { ValidationField } from '../interfaces';

export const required = (fieldValue: string): ValidationField => {
  let isError = false;
  let errorText = '';

  if (fieldValue.length === 0) {
    isError = true;
    errorText = EMPTY_FIELDS;
  }

  return {
    isError,
    errorText,
  };
};
