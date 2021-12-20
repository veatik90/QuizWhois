import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Auth } from './pages/Auth';
import { RandomQuestionPage } from './pages/TrainingQuiz/RandomQuestion';
import { RandomPackPage } from './pages/TrainingQuiz/RandomPack';
import { ReadyPackPage } from './pages/TrainingQuiz/ReadyPack';
import { GameCatalogPage } from './pages/GameCatalog';
import { Routes } from './configs/routes';
import { CreatedGamesPage } from './pages/CreatedGames';
import { InstantGamePage } from './pages/InstantGame';
import { GamesArchivePage } from './pages/GamesArchive';

import { PackListPage } from './pages/Pack/List';
import { PackCreationPage } from './pages/Pack/Create';
import { PackUpdatePage } from './pages/Pack/Update';
import { QuestionCrudPage } from './pages/QuestionCrud';

import { Notifications } from './pages/Notifications';

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
        <Route path={Routes.PACK_LIST}>
          <PackListPage />
        </Route>
        <Route path={Routes.PACK_CREATION}>
          <PackCreationPage />
        </Route>
        <Route path={Routes.PACK_UPDATE}>
          <PackUpdatePage />
        </Route>
        <Route path={Routes.QUESTION_CRUD}>
          <QuestionCrudPage />
        </Route>
        <Route path={Routes.RANDOM_QUESTION}>
          <RandomQuestionPage />
        </Route>
        <Route path={Routes.READY_PACK}>
          <ReadyPackPage />
        </Route>
        <Route path={Routes.RANDOM_PACK}>
          <RandomPackPage />
        </Route>
        <Route path={Routes.MY_CREATED_GAMES}>
          <CreatedGamesPage />
        </Route>
        <Route path={Routes.INSTANT}>
          <InstantGamePage />
        </Route>
        <Route path={Routes.ARCHIVE}>
          <GamesArchivePage />
        </Route>
        <Route path={Routes.NOTIFICATIONS}>
          <Notifications />
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
