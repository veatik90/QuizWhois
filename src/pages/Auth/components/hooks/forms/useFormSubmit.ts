import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { FormSubmit } from './interfaces';

export const useFormSubmit = (): FormSubmit => {
  const [authErrorMessage, setAuthErrorMessage] = useState<undefined | string>(undefined);
  const history = useHistory();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
      history.push('/');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setAuthErrorMessage(error.message);
      }
    }
  };

  return {
    authErrorMessage,
    handleSubmit,
  };
};
