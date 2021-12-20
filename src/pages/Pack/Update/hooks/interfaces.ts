import { FormEvent } from 'react';

export interface SubmitCreatePack {
  /** handle submit form */
  handleSubmitCreatePack(event: FormEvent<HTMLFormElement>): void;
}
