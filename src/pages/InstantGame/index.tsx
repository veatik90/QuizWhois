import Container from '@mui/material/Container';
import { withTabs } from '../../hoc/withTabs';

export function InstantGame() {
  return (
    <Container component="main" maxWidth="lg">
      моментальная игра
    </Container>
  );
}

export const InstantGamePage = withTabs(InstantGame);
