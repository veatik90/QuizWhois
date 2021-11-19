export interface ValidationField {
  /** flag of validation error */
  isError: boolean;
  /** message of validation error */
  errorText: string;
}

/** types of validation */
export type Validation = 'required' | 'email' | 'mismatch';
