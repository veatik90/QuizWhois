export interface Question {
  id: number;
  packet_id: number;
  question: string;
  answers: string[];
}

export interface Pack {
  id: number;
  name: string;
  description: string;
  isDraft: number;
  questions: Question[];
}
