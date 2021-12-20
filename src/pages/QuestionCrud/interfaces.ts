export interface IQuestion {
  id: number;
  packet_id: number | null;
  question: string;
  answers: string[];
}
