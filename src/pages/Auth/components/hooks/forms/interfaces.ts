import { FormEvent } from 'react';

export interface FormSubmit {
  /** server auth error */
  authErrorMessage: undefined | string;
  /** handle submit form */
  handleSubmit(event: FormEvent<HTMLFormElement>): void;
}

export interface FormValidation {
  /** disabled flag of submit form */
  isDisabledSubmit: boolean;
}