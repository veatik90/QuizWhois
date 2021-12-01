/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@mui/material';
import { GoogleLogout } from 'react-google-login';
import { useAxiosPostLazy } from '../../../hooks/axios/useAxiosPostLazy';

const clientId = '371103055108-mg03m799auodu20ael4hal3j7g7gbrvr.apps.googleusercontent.com';

export function Logout() {
  const { postRequest, response: responseLazy, error: errorLazy, isLoading: isLoadingLazy } = useAxiosPostLazy();

  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <GoogleLogout
      render={(renderProps) => (
        <Button onClick={() => postRequest('http://kmatroskin.ru/auth/logout', {})}>Logout</Button>
      )}
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    />
  );
}
