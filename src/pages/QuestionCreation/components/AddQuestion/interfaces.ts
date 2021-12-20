import { IQuestion } from '../../../QuestionCrud/interfaces';

export interface IAddQuestion {
  questions: IQuestion[];
  question: string;
  answers: string[];
  answer: string;
  allHandleQuestionChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  allHandleQuestionDelete: () => void;
  allHandleQuestionSave: () => void;
  questionErrorDisplay: boolean;
  questionHelperText: string;
  handleChangeAnswers: (event: React.SyntheticEvent<Element, Event>, value: string[]) => void;
  answersErrorDisplay: boolean;
  answersHelperText: string;
  allHandleAnswerChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleAnswerBlur: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSavePack: () => void;
  isEdit: boolean;
  isDisabledSubmitQuestion: boolean;
  isDisabledSubmitPack: boolean;
}
