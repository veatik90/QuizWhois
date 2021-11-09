import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Auth } from './pages/Auth';
import { RandomQuestion } from './pages/TrainingQuiz/RandomQuestion';
import { RandomPack } from './pages/TrainingQuiz/RandomPack';
import { ReadyPack } from './pages/TrainingQuiz/ReadyPack';
import { AppTabs } from './components/AppTabs';
import { GameCatalog } from './pages/GameCatalog';
import { PackCreation } from './pages/PackCreation';
import { Routes } from './configs/routes';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <AppTabs />
      <Switch>
        <Route path={Routes.AUTH}>
          <Auth />
        </Route>
        <Route path={Routes.CATALOG}>
          <GameCatalog />
        </Route>
        <Route path={Routes.PACK_CREATION}>
          <PackCreation />
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
        <Route path={Routes.NOT_FOUND}>
          <NotFound />
        </Route>
        <Route exact path={Routes.ROOT}>
          <Redirect to={Routes.CATALOG} />
        </Route>

        <Route path="*">
          <Redirect to={Routes.NOT_FOUND} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
