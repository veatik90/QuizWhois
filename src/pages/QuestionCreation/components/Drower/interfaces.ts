import { IQuestion } from '../../interfaces';

export interface IDrower {
  questions: IQuestion[];
  handleQuestionQlick: (elemId: number) => void;
}
