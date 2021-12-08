import { Button } from '@mui/material';
import { FC, useState } from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { clientId } from '../constants';
import { StyledA } from './styles';

export const Login: FC = () => {
  const [, setLoginFailed] = useState<boolean>();
  const [, setGoogleAccessToken] = useState<string>('');
  const loginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('tokenId' in response) {
      setGoogleAccessToken(response.tokenId);
    }
  };
  const handleFailure = () => {
    setLoginFailed(true);
  };
  return (
    <GoogleLogin
      render={() => (
        <Button variant="outlined" color="secondary" size="medium">
          <StyledA href="http://kmatroskin.ru/auth/login">Sign In</StyledA>
        </Button>
      )}
      clientId={clientId}
      buttonText="Google"
      onSuccess={loginSuccess}
      onFailure={handleFailure}
      cookiePolicy="single_host_origin"
      responseType="code,token"
    />
  );
};
