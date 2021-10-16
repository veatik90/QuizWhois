import * as React from 'react';
import { FC } from 'react';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export const Auth: FC = () => {
  const [openSignUp, setOpenSignUp] = React.useState(false);

  /**
  TODO: ESlint заставляет писать конкретно этот return в одну строку,
   но в таком случае сам же ругается на превышение длины строки.
  */
  // eslint-disable-next-line max-len
  return <>{!openSignUp ? <SignIn setOpenSignUp={setOpenSignUp} /> : <SignUp setOpenSignUp={setOpenSignUp} />}</>;
};
