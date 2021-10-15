import { FC } from 'react';
import { Button } from '@mui/material';
import { SignUpProps } from './interfaces';

export const SignUp: FC<SignUpProps> = ({ setOpenSignUp }) => (
  <p>
    Already have an account?
    <Button onClick={() => setOpenSignUp(false)}>SignIn</Button>
  </p>
);
