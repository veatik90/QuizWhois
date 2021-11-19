import { FormEvent } from 'react';

export interface SubmitCreateQuiz {
  /** handle submit form */
  handleSubmitCreateQuiz(event: FormEvent<HTMLFormElement>): void;
}
