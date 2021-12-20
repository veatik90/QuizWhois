import { FC } from 'react';
import Container from '@mui/material/Container';
import { withTabs } from '../../../hoc/withTabs';

export const RandomPack: FC = () => {
  return (
    <Container component="main" maxWidth="lg">
      тренировочная игра со случайным пакетом
    </Container>
  );
};

export const RandomPackPage = withTabs(RandomPack);
