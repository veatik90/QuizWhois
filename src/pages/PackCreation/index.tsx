import { Container } from '@mui/material';
import { Prompt } from 'react-router';
import { withTabs } from '../../hoc/withTabs';

export function PackCreation() {
  return (
    <Container component="main" maxWidth="lg">
      Создание пакета
      <Prompt when message="You're leaving without saving." />
    </Container>
  );
}

export const PackCreationPage = withTabs(PackCreation);
