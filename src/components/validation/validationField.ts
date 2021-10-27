import { required } from './types/required';
import { email } from './types/email';
import { mismatch } from './types/mismatch';
import { Validation, ValidationField } from './interfaces';

const prioritizer = (validations: Validation[]) => {
  return validations.map((validation) => {
    switch (validation) {
      case 'required':
        return { name: validation, position: 1 };
      case 'email':
        return { name: validation, position: 2 };
      case 'mismatch':
        return { name: validation, position: 3 };
      default:
        throw new SyntaxError('Incorrect validation received');
    }
  });
};

const sortValidationTypes = (validations: Array<'required' | 'email' | 'mismatch'>) => {
  const validationsWithPriorities = prioritizer(validations);

  validationsWithPriorities.sort((itemA, itemB) => {
    return itemA.position - itemB.position;
  });

  return validationsWithPriorities.map((validation) => {
    return validation.name;
  });
};

export const validationField = (
  validations: Validation[],
  value: string,
  valueComparison?: string,
): ValidationField => {
  const sortedValidation = sortValidationTypes(validations);
  let checkValidator = { isError: false, errorText: '' };

  for (let i = 0; i < sortedValidation.length; i += 1) {
    switch (sortedValidation[i]) {
      case 'required':
        checkValidator = required(value);
        break;
      case 'email':
        checkValidator = email(value);
        break;
      case 'mismatch':
        checkValidator = mismatch(value, valueComparison);
        break;
      default:
        break;
    }
    if (checkValidator.isError) {
      break;
    }
  }

  return checkValidator;
};
