// @ts-nocheck
import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HTTP_METHOD, useAxios } from './hooks/useAxios';
import { NotFound } from './pages/NotFound';

const App: FC = () => {
  const { data, error, isLoading } = useAxios(
    HTTP_METHOD.POST,
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKTdCye6Aaxf0iXTw-jTCtUww46_cB-xI',
    { email: 'vasdsxxad@gmail.com', password: '234234ddfdsfedac', returnSecureToken: true },
  );

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
