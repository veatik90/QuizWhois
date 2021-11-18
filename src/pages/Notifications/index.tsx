import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Stack, Container, Alert, Typography, Paper } from '@mui/material';
import { Pack } from './interfaces';
import { PACKS } from './constants';
import { Routes } from '../../configs/routes';

export const Notifications: FC = () => {
  const [packs, setPacks] = useState<Pack[]>(PACKS);
  const filteredPacks = packs.filter((p) => p.isDraft === true);
  console.log(setPacks);
  return (
    <Container component="main" maxWidth="md">
      <Stack mt={3} direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}>
        {filteredPacks ? (
          filteredPacks.map((p) => (
            <Paper style={{ textDecoration: 'none' }} component={NavLink} to={Routes.MY_CREATED_GAMES} elevation={4}>
              <Alert severity="info">
                <Typography>
                  &nbsp;&nbsp; Не завершено создание пакета&nbsp;&quot;
                  {p.name}
                  &quot;
                </Typography>
              </Alert>
            </Paper>
          ))
        ) : (
          <>Список уведомлений пуст</>
        )}
      </Stack>
    </Container>
  );
};
