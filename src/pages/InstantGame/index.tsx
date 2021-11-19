import { FC } from 'react';
import Container from '@mui/material/Container';
import { withTabs } from '../../hoc/withTabs';

export const InstantGame: FC = () => {
  return (
    <Container component="main" maxWidth="lg">
      моментальная игра
    </Container>
  );
};

export const InstantGamePage = withTabs(InstantGame);
