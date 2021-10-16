import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Auth } from './pages/Auth';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <p>home</p>
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
