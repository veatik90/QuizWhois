export interface Pack {
  id: number;
  name: string;
  description: string;
  isDraft: number;
  questions: Question[];
}

export interface Question {
  question: string;
  answers: string[];
}
