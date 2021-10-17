import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HttpMethod, useAxios } from './hooks/useAxios';
import { NotFound } from './pages/NotFound';

function urlExample() {
  const apiKey = 'AIzaSyBKTdCye6Aaxf0iXTw-jTCtUww46_cB-xI';
  return {
    postError: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    postSuccess: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
  };
}
const body = { email: 'vasdsxxad@gmail.com', password: '234234ddfdsfedac', returnSecureToken: true };

const App: FC = () => {
  const { data, error, isLoading } = useAxios(HttpMethod.POST, urlExample().postSuccess, body);
  // eslint-disable-next-line no-console
  console.log(data, error, isLoading);

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
