import Container from '@mui/material/Container';
import { withTabs } from '../../hoc/withTabs';

export function CreatedGames() {
  return (
    <Container component="main" maxWidth="lg">
      мои созданные игры
    </Container>
  );
}

export const CreatedGamesPage = withTabs(CreatedGames);
