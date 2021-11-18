import { FC, useState } from 'react';
import { Stack, Container } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { PaperStyled, DivStyled } from './styles';
import { Pack } from './interfaces';
import { PACKS } from './constants';

export const Notifications: FC = () => {
  const [packs, setPacks] = useState<Pack[]>(PACKS);
  const filteredPacks = packs.filter((p) => p.isDraft === true);
  console.log(setPacks);
  return (
    <Container component="main" maxWidth="md">
      <Stack mt={3} direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}>
        {filteredPacks ? (
          filteredPacks.map((p) => (
            <PaperStyled sx={{ bgcolor: 'secondary.contrastText' }}>
              <DivStyled>
                <ErrorOutlineIcon />
                &nbsp;&nbsp; Не завершено создание пакета&nbsp;&quot;
                {p.name}
                &quot;
              </DivStyled>
            </PaperStyled>
          ))
        ) : (
          <>Список уведомлений пуст</>
        )}
      </Stack>
    </Container>
  );
};
