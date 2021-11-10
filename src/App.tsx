import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Auth } from './pages/Auth';
import { RandomQuestion } from './pages/TrainingQuiz/RandomQuestion';
import { RandomPackPage } from './pages/TrainingQuiz/RandomPack';
import { ReadyPack } from './pages/TrainingQuiz/ReadyPack';
import { GameCatalogPage } from './pages/GameCatalog';
import { PackCreationPage } from './pages/PackCreation';
import { Routes } from './configs/routes';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={Routes.AUTH}>
          <Auth />
        </Route>
        <Route path={Routes.CATALOG}>
          <GameCatalogPage />
        </Route>
        <Route path={Routes.PACK_CREATION}>
          <PackCreationPage />
        </Route>
        <Route path="/training/randomQuestion">
          <RandomQuestion />
        </Route>
        <Route path="/training/readyPack">
          <ReadyPack />
        </Route>
        <Route path="/training/randomPack">
          <RandomPackPage />
        </Route>
        <Route path="/training">
          <RandomPackPage />
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
