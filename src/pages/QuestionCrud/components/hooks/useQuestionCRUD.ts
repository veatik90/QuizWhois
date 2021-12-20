import { SyntheticEvent, useState } from 'react';
import * as React from 'react';
import { useLocation } from 'react-router';
import { IQuestion } from '../../interfaces';
import { getPackById } from '../../../../shared/mocks/packsMock';

export const useQuestionCRUD = () => {
  const location = useLocation().pathname.split('/');
  let packetId: number | null = null;
  let data: IQuestion[] = [];
  if (location.length === 3) {
    packetId = Number(location.pop());
    data = getPackById(packetId).questions;
  }

  const [questions, setQuestions] = useState<IQuestion[]>(data);
  const [id, setId] = useState(questions.length);
  const [isEdit, setIsEdit] = useState(false);
  const [answer, setAnswer] = useState('example');
  const [answers, setAnswers] = useState<string[]>([]);
  const [question, setQuestion] = useState('');

  const handleChangeQuestion = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuestion(event.target.value);
  };

  const handleQuestionSave = () => {
    const tmpQuestions = [...questions];
    const questionIndex = tmpQuestions.findIndex((elem) => elem.id === id);
    if (questionIndex >= 0) {
      tmpQuestions[questionIndex] = { id, packet_id: packetId, question, answers };
    } else {
      tmpQuestions.push({ id, packet_id: packetId, question, answers });
    }

    const isNotNewQuestion = questions.filter((elem) => elem.id === id).length === 1;
    if (isNotNewQuestion) {
      for (let i = 0; i < questions.length; i += 1) {
        if (questions[i].id === id) {
          tmpQuestions[i] = { id, question, answers, packet_id: packetId };
          break;
        }
      }
    } else {
      tmpQuestions.push({ id, question, answers, packet_id: packetId });
    }

    // TODO: в данной функции без setQuestions происходит присвоение useState question. Как?!
    setQuestions(tmpQuestions);
    setAnswers([]);
    setQuestion('');
    setId(id + 1);
    setIsEdit(false);
  };

  const handleQuestionDelete = () => {
    const actualQuestions = questions.filter((elem) => elem.id !== id);
    setQuestions(actualQuestions);
    setAnswers([]);
    setQuestion('');
    setId(id);
    setIsEdit(false);
  };

  const handleQuestionClick = (elemId: number) => {
    const [temp] = questions.filter((elem) => elem.id === elemId);
    setId(temp.id);
    setQuestion(temp.question);
    setAnswers(temp.answers);
    setIsEdit(true);
  };

  const handleAnswerBlur = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value) {
      answers.push(event.target.value);
      setAnswers(answers);
      setAnswer('');
    }
  };

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAnswer(event.target.value);
  };

  const handleChangeAnswers = (event: SyntheticEvent<Element, Event>, value: string[]) => {
    setAnswers(value);
  };

  return {
    handleChangeQuestion,
    handleChangeAnswers,
    handleAnswerChange,
    handleAnswerBlur,
    handleQuestionDelete,
    handleQuestionSave,
    handleQuestionClick,
    question,
    answers,
    answer,
    isEdit,
    questions,
    setQuestions,
  };
};
