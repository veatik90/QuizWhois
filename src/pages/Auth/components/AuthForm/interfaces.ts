import React from 'react';

export interface AuthFormProps {
  /** display toggle flag */
  isSignUp?: boolean;
  /** function for sending form fields */
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  /** server auth error */
  // authErrorMessage: undefined | string;
  /** flag function for switching sign forms */
  setIsOpenedSignUp(open: boolean): void;
  /** confirmPassword field handler */
  handleChangeFieldConfirmPassword?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** email field handler */
  handleChangeFieldEmail: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** password field handler */
  handleChangeFieldPassword: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** helper text for email(check by mask and on an empty field) */
  emailHelperText: string;
  /** helper text for password(check for an empty field) */
  passwordHelperText: string;
  /** check for an empty field and match the password and confirmPassword */
  confirmPasswordHelperText?: string;
  /** submit button activity flag */
  isDisabledSubmit: boolean;
  /** passwordError flag */
  passwordError: boolean;
  /** emailError flag */
  emailError: boolean;
  /** confirmPasswordError flag */
  confirmPasswordError?: boolean;
}
