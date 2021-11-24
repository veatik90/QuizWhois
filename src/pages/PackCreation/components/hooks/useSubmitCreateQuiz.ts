/* eslint-disable no-console */

import React from 'react';
import { useHistory } from 'react-router';
import { SubmitCreateQuiz } from './interfaces';
import { useAxiosPostLazy } from '../../../../hooks/axios/useAxiosPostLazy';

export const useSubmitCreateQuiz = (): SubmitCreateQuiz => {
  const { postRequest, response, error, isLoading } = useAxiosPostLazy();

  const history = useHistory();
  const handleSubmitCreateQuiz = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      quizName: data.get('quizName'),
    });

    postRequest('http://kmatroskin.ru/quiz', { quizName: data.get('quizName') });
    console.log({
      response,
      error,
      isLoading,
    });

    // TODO: дождаться ответа с сервера перед редиректом.
    history.push('/question/create');
  };

  return {
    handleSubmitCreateQuiz,
  };
};
