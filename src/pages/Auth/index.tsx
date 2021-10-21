import * as React from 'react';
import { FC } from 'react';
import { useHistory } from 'react-router';
import { AuthForm } from './AuthForm';
import { SignUp } from './SignUp';

export const Auth: FC = () => {
  const [isOpenedSignUp, setIsOpenedSignUp] = React.useState(false);
  const [authErrorMessage, setAuthErrorMessage] = React.useState(undefined);
  const history = useHistory();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
      history.push('/');
    } catch (err: any) {
      setAuthErrorMessage(err.message);
    }
  };
  /**
  TODO: ESlint заставляет писать конкретно этот return в одну строку,
   но в таком случае сам же ругается на превышение длины строки.
  */
  // eslint-disable-next-line max-len
  return (
    <>
      {!isOpenedSignUp ? (
        // eslint-disable-next-line max-len
        <AuthForm
          isSignUp={false}
          setIsOpenedSignUp={setIsOpenedSignUp}
          authErrorMessage={authErrorMessage}
          onSubmit={handleSubmit}
        />
      ) : (
        <SignUp setIsOpenedSignUp={setIsOpenedSignUp} />
      )}
    </>
  );
};
