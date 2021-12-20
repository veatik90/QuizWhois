import { Box, Grid, List, ListItem, ListItemText } from '@mui/material';
import React, { FC } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { withTabs } from '../../../hoc/withTabs';
import { packsMock } from '../../../shared/mocks/packsMock';
import { Pack } from './interfaces';
import { useButton } from './hooks/useButton';
import { DeleteButton } from './components/DeleteButton';
import { EditPackButton } from './components/EditPackButton';
import { QuestionCrudButton } from './components/QuestionCrudButton';

const PackList: FC = () => {
  const packs = packsMock;
  const { handleClickCreateButton } = useButton();

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Typography component="h1" variant="h5" sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
        Список пакетов
      </Typography>
      <Button onClick={handleClickCreateButton} type="button" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Создать пакет
      </Button>
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <List>
              {packs.map((pack: Pack) => (
                <ListItem>
                  <ListItemText primary={pack.name} />
                  <QuestionCrudButton packId={pack.id} />
                  <EditPackButton packId={pack.id} />
                  <DeleteButton packId={pack.id} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export const PackListPage = withTabs(PackList);
