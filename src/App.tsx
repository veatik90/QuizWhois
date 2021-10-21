import { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { NotFound } from './pages/NotFound';
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
  const [onSuccess, setOnSuccess] = useState<AxiosResponse | null>(null);
  const [onError, setOnError] = useState<AxiosResponse | undefined | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { requestPostLazy } = useAxiosPostLazy(setOnSuccess, setOnError, setIsLoading);

  useEffect(() => {
    requestPostLazy(urlExample().postSuccess, body);
  }, []);
  console.log(onSuccess, onError, isLoading);

  return (
    <Router>
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
