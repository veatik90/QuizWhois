import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Auth } from './pages/Auth';
import { QuizCreate } from './pages/Quiz/create';
import { QuestionCreation } from './pages/QuestionCreation';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <p>home</p>
        </Route>
        <Route path="/quiz/create">
          <QuizCreate />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/questionCreation">
          <QuestionCreation />
        </Route>
        <Route path="*">
          <Redirect to="/404-page" />
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
