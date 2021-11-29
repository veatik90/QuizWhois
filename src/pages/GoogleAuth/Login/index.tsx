import { Button } from '@mui/material';
import { FC, useState } from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const clientId = '770240261516-ao84soncq7mtp30fhi65tv35u2rt13do.apps.googleusercontent.com';

interface GoogleSignInComponentProps {
  loginSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
}

export const Login: FC<GoogleSignInComponentProps> = ({ loginSuccess }) => {
  const [, setLoginFailed] = useState<boolean>();

  return (
    <GoogleLogin
      render={(renderProps) => (
        <Button onClick={renderProps.onClick} variant="outlined" color="secondary" size="medium">
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
