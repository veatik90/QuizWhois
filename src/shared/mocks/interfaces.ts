import { IQuestion } from '../../pages/QuestionCrud/interfaces';

export interface PacksMock {
  id: number;
  name: string;
  description: string;
  isDraft: number;
  questions: IQuestion[];
}
