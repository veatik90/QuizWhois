import { FC } from 'react';
import Container from '@mui/material/Container';
import { withTabs } from '../../hoc/withTabs';

export const GamesArchive: FC = () => {
  return (
    <Container component="main" maxWidth="lg">
      архив игр
    </Container>
  );
};

export const GamesArchivePage = withTabs(GamesArchive);
