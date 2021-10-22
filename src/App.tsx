import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import { NotFound } from './pages/NotFound';
import { useAxiosPost } from './hooks/axios/useAxiosPost';
import { useAxiosPostLazy } from './hooks/axios/useAxiosPostLazy';

function urlExample() {
  const apiKey = 'AIzaSyBKTdCye6Aaxf0iXTw-jTCtUww46_cB-xI';
  return {
    postError: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    postSuccess: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
  };
}
const body = { email: 'vasdsxxad@gmail.com', password: '234234ddfdsfedac', returnSecureToken: true };

const App: FC = () => {
  const { response, error, isLoading } = useAxiosPost(urlExample().postSuccess, body);
  const { postRequest, response: responseLazy, error: errorLazy, isLoading: isLoadingLazy } = useAxiosPostLazy();

  console.log(`response: ${response} \n`, `error: ${error} \n`, `isLoading: ${isLoading} \n`);
  console.log(`responseLazy: ${responseLazy} \n`, `errorLazy: ${errorLazy} \n`, `isLoadingLazy: ${isLoadingLazy} \n`);

  function handlePostRequest() {
    postRequest(urlExample().postSuccess, body);
  }

  return (
    <Router>
      <Button onClick={handlePostRequest}>Post Request</Button>
      <Switch>
        <Route exact path="/">
          <p>home</p>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
