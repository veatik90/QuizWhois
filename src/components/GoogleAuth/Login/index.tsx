/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@mui/material';
import { FC, useState } from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { useAxiosGetLazy } from '../../../hooks/axios/useAxiosGetLazy';

const clientId = '371103055108-mg03m799auodu20ael4hal3j7g7gbrvr.apps.googleusercontent.com';

interface GoogleSignInComponentProps {
  loginSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
}

export const Login: FC<GoogleSignInComponentProps> = ({ loginSuccess }) => {
  const { getRequest, response: responseLazy, error: errorLazy, isLoading: isLoadingLazy } = useAxiosGetLazy();
  const [, setLoginFailed] = useState<boolean>();

  return (
    <GoogleLogin
      render={(renderProps) => (
        <Button
          onClick={() => getRequest('http://kmatroskin.ru/auth/login')}
          variant="outlined"
          color="secondary"
          size="medium"
        >
          Sign In
        </Button>
      )}
      clientId={clientId}
      buttonText="Google"
      onSuccess={loginSuccess}
      onFailure={() => {
        setLoginFailed(true);
      }}
      cookiePolicy="single_host_origin"
      responseType="code,token"
    />
  );
};
