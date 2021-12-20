import { PacksMock } from './interfaces';

export const packsMock: PacksMock[] = [
  {
    id: 1,
    name: 'First pack',
    description: 'description pack',
    isDraft: 0,
    questions: [
      {
        id: 1,
        packet_id: 1,
        question: 'It is example question?',
        answers: ['array with', 'answers'],
      },
    ],
  },
  {
    id: 2,
    name: 'Best pack QuizWhois',
    description: 'Many best questions',
    isDraft: 1,
    questions: [
      {
        id: 2,
        packet_id: 2,
        question: 'It is example question?',
        answers: ['array with', 'answers'],
      },
      {
        id: 3,
        packet_id: 2,
        question: 'Second question?',
        answers: ['first answer', 'second'],
      },
    ],
  },
  {
    id: 3,
    name: 'Test QuizWhois',
    description: 'It is not display in crud',
    isDraft: 1,
    questions: [
      {
        id: 4,
        packet_id: 3,
        question: 'It is example question?',
        answers: ['array with', 'answers'],
      },
      {
        id: 5,
        packet_id: 3,
        question: 'Second question?',
        answers: ['first answer', 'second'],
      },
    ],
  },
];

export function getPackById(id: number) {
  return packsMock[id - 1];
}
