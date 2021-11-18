import { FC, useState } from 'react';
import { Stack, Container, Alert, Typography, Paper } from '@mui/material';
import { Pack } from './interfaces';
import { PACKS } from './constants';
import { Routes } from '../../configs/routes';
import { NavLinkStyled } from './styles';

export const Notifications: FC = () => {
  const [packs, setPacks] = useState<Pack[]>(PACKS);
  const filteredPacks = packs.filter((p) => p.isDraft === true);
  console.log(setPacks);
  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h4" align="center" color="primary" gutterBottom sx={{ marginTop: 3 }}>
        Уведомления
      </Typography>
      <Stack mt={2} direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}>
        {filteredPacks ? (
          filteredPacks.map((p) => (
            <NavLinkStyled to={Routes.MY_CREATED_GAMES}>
              <Paper elevation={4}>
                <Alert severity="info">
                  <Typography>
                    &nbsp;&nbsp; Не завершено создание пакета&nbsp;&quot;
                    {p.name}
                    &quot;
                  </Typography>
                </Alert>
              </Paper>
            </NavLinkStyled>
          ))
        ) : (
          <>Список уведомлений пуст</>
        )}
      </Stack>
    </Container>
  );
};
