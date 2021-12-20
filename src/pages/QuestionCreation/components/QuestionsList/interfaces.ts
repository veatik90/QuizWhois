import { IQuestion } from '../../../QuestionCrud/interfaces';

export interface IQuestionsList {
  questions: IQuestion[];
  allHandleQuestionClick: (elemId: number) => void;
  handleSavePack: () => void;
}
