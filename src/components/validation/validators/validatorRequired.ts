import { EMPTY_FIELDS } from './constants';
import { ValidationField } from '../interfaces';

export const validatorRequired = (fieldValue: string): ValidationField => {
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
