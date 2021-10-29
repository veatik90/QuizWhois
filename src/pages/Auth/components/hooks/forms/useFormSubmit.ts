import React from 'react';
import { useHistory } from 'react-router';
import { FormSubmit } from './interfaces';

export const useFormSubmit = (): FormSubmit => {
  const history = useHistory();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    history.push('/');
  };

  return {
    handleSubmit,
  };
};
