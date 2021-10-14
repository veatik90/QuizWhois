import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { SignIn } from './pages/SignIn';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <p>home</p>
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
