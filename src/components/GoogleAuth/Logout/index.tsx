/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@mui/material';
import { GoogleLogout } from 'react-google-login';
import { useAxiosPostLazy } from '../../../hooks/axios/useAxiosPostLazy';
import { clientId } from '../constants';

export function Logout() {
  const { postRequest, response: responseLazy, error: errorLazy, isLoading: isLoadingLazy } = useAxiosPostLazy();

  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <GoogleLogout
      render={() => <Button onClick={() => postRequest('http://kmatroskin.ru/auth/logout', {})}>Logout</Button>}
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    />
  );
}
