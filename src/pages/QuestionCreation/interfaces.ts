export interface IQuestion {
  id: number;
  question: string;
  answer: string;
  answerSynonyms: ISynonym[];
}

export interface ISynonym {
  id: number;
  synonym: string;
}
