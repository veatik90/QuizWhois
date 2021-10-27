import { FocusEvent } from 'react';

export interface AuthField {
  /** value of field */
  value: string;
  /** flag of display validation error */
  errorDisplay: boolean;
  /** flag of validation error */
  errorValidation: boolean;
  /** error message */
  helperText: string;
  /** handler onChange action */
  handleChange(event: FocusEvent<HTMLInputElement>): void;
}
