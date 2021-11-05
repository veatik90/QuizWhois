import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Redirect to="/dashboard" />
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
