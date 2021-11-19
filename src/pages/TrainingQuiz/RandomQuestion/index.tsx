import { FC } from 'react';
import Container from '@mui/material/Container';
import { withTabs } from '../../../hoc/withTabs';

export const RandomQuestion: FC = () => {
  return (
    <Container component="main" maxWidth="lg">
      тренировочная игра со случайным вопросом
    </Container>
  );
};

export const RandomQuestionPage = withTabs(RandomQuestion);
