import Container from '@mui/material/Container';
import { withTabs } from '../../../hoc/withTabs';

export function ReadyPack() {
  return (
    <Container component="main" maxWidth="lg">
      тренировочная игра с готоым пакетом
    </Container>
  );
}

export const ReadyPackPage = withTabs(ReadyPack);
