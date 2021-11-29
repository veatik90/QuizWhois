import { GoogleLogout } from 'react-google-login';

const clientId = '770240261516-ao84soncq7mtp30fhi65tv35u2rt13do.apps.googleusercontent.com';

export function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onSuccess} />;
}
