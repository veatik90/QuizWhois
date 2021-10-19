import * as React from 'react';
import { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useHistory } from 'react-router';
import { Grid } from '@mui/material';
import { SignInProps } from './interfaces';
import { ButtonStyled } from './styles';

export const SignIn: FC<SignInProps> = ({ setIsOpenedSignUp }) => {
  const history = useHistory();
  const [authErrorMessage, setAuthErrorMessage] = React.useState(undefined);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
      history.push('/');
    } catch (err: any) {
      setAuthErrorMessage(err.message);
    }
  };
  const openSignUp = () => {
    setIsOpenedSignUp(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Typography variant="body2" sx={{ color: '#FF4040' }}>
            {authErrorMessage}
          </Typography>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <ButtonStyled onClick={openSignUp}>Don&apos;t have an account?</ButtonStyled>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
