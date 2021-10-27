import * as React from 'react';
import { FC, useState } from 'react';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export const Auth: FC = () => {
  const [isOpenedSignUp, setIsOpenedSignUp] = useState(false);

  return (
    <>
      {!isOpenedSignUp ? (
        <SignIn setIsOpenedSignUp={setIsOpenedSignUp} />
      ) : (
        <SignUp setIsOpenedSignUp={setIsOpenedSignUp} />
      )}
    </>
  );
};
