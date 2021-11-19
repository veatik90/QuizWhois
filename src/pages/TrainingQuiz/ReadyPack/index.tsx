import { FC } from 'react';
import Container from '@mui/material/Container';
import { withTabs } from '../../../hoc/withTabs';

export const ReadyPack: FC = () => {
  return (
    <Container component="main" maxWidth="lg">
      тренировочная игра с готоым пакетом
    </Container>
  );
};

export const ReadyPackPage = withTabs(ReadyPack);
