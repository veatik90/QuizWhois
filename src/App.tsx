import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { RandomQuestion } from './pages/TrainingQuiz/RandomQuestion';
import { RandomPack } from './pages/TrainingQuiz/RandomPack';
import { ReadyPack } from './pages/TrainingQuiz/ReadyPack';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/allGames" />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route exact path={['/allGames', '/archive', '/training', '/momentary', '/packCreation']}>
          <Dashboard />
        </Route>
        <Route path="/training/randomQuestion">
          <RandomQuestion />
        </Route>
        <Route path="/training/readyPack">
          <ReadyPack />
        </Route>
        <Route path="/training/randomPack">
          <RandomPack />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
