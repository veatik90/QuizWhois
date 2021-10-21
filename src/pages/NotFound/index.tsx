import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
// import { boxStyled, stackStyled } from './styles';
import { BoxStyled, StackStyled } from './styles';
import NotFoundImage from './assets/NotFoundImage.png';

export const NotFound: FC = () => (
  <BoxStyled>
    <StackStyled spacing={2}>
      <img src={NotFoundImage} alt="telescope" />
      <Typography>404 | Page not found</Typography>
      <Button component={NavLink} to="/" variant="outlined" color="primary" size="large">
        home
      </Button>
    </StackStyled>
  </BoxStyled>
);
