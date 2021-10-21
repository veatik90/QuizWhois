import { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { AuthFormProps } from './interfaces';
import { ButtonStyled } from '../SignIn/styles';
// eslint-disable-next-line
export const AuthForm: FC<AuthFormProps> = ({ isSignUp, onSubmit, authErrorMessage, setIsOpenedSignUp }) => {
  const openSignIn = () => {
    setIsOpenedSignUp(false);
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
        {!isSignUp ? (
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        ) : (
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
        )}
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
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
          {!isSignUp ? (
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          ) : (
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
          )}
          <Grid container justifyContent="flex-end">
            <Grid item>
              {!isSignUp ? (
                <ButtonStyled onClick={openSignUp}>Don&apos;t have an account?</ButtonStyled>
              ) : (
                <ButtonStyled onClick={openSignIn}>Already have an account?</ButtonStyled>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
