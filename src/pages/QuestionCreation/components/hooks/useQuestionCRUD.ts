/* eslint-disable no-console */

import { SyntheticEvent, useState } from 'react';
import * as React from 'react';
import { IQuestion } from '../../interfaces';

export const useQuestionCRUD = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [id, setId] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [answer, setAnswer] = useState('example');
  const [answers, setAnswers] = useState<string[]>([]);
  const [question, setQuestion] = useState('');

  const handleChangeQuestion = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuestion(event.target.value);
  };

  const handleQuestionSave = () => {
    const tmpQuestions = questions;
    const isNotNewQuestion = questions.filter((elem) => elem.id === id).length === 1;
    if (isNotNewQuestion) {
      for (let i = 0; i < questions.length; i += 1) {
        if (questions[i].id === id) {
          tmpQuestions[i] = { id, question, answers };
          break;
        }
      }
    } else {
      tmpQuestions.push({ id, question, answers });
    }

    // TODO: в данной функции без setQuestions происходит присвоение useState question. Как?!
    // setQuestions(test);
    setAnswers([]);
    setQuestion('');
    setId(questions.length);
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
  };
};
