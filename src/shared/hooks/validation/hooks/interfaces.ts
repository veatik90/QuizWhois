import React from 'react';

export interface FormValidation {
  /** disabled flag of submit form */
  isDisabledSubmit: boolean;
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
  handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  /** set input value as empty for validation */
  validationSetEmptyValue(): void;
  /** set input value for validation */
  validationSetValue(currentValue: string): void;
}
