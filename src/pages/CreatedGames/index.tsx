import { FC } from 'react';
import Container from '@mui/material/Container';
import { withTabs } from '../../hoc/withTabs';

export const CreatedGames: FC = () => {
  return (
    <Container component="main" maxWidth="lg">
      мои созданные игры
    </Container>
  );
};

export const CreatedGamesPage = withTabs(CreatedGames);
