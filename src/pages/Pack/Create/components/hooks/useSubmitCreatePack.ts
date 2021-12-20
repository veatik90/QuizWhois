/* eslint-disable no-console */

import React from 'react';
import { SubmitCreatePack } from './interfaces';
import { useAxiosPostLazy } from '../../../../../hooks/axios/useAxiosPostLazy';

export const useSubmitCreatePack = (): SubmitCreatePack => {
  const { postRequest, response, error, isLoading } = useAxiosPostLazy();

  // const history = useHistory();
  const handleSubmitCreatePack = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      description: formData.get('description'),
      isDraft: true,
    };

    console.log(data);

    postRequest('http://kmatroskin.ru/pack', data);
    console.log({
      response,
      error,
      isLoading,
    });

    // TODO: дождаться ответа с сервера перед редиректом.
    // history.push('/question/create');
  };

  return {
    handleSubmitCreatePack,
  };
};
