import { ChangeEvent } from 'react';

export interface FormValidation {
  /** disabled flag of submit form */
  isDisabledSubmit: boolean;
  /** Setup flag of submit form */
  resetValidation(): void;
}

export interface FieldName {
  /** value of field */
  value: string;
  /** flag of display validation error */
  errorDisplay: boolean;
  /** flag of validation error */
  errorValidation: boolean;
  /** error message */
  helperText: string;
  /** handler onChange action */
  handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}
