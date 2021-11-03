import React, { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { AuthFormProps } from './interfaces';

export const AuthForm: FC<AuthFormProps> = ({
  isSignUp,
  onSubmit,
  setIsOpenedSignUp,
  handleChangeFieldPassword,
  handleChangeFieldEmail,
  handleChangeFieldConfirmPassword,
  isDisabledSubmit,
  confirmPasswordHelperText,
  passwordHelperText,
  emailHelperText,
  passwordError,
  emailError,
  confirmPasswordError,
}) => {
  const handleOpenSignIn = () => {
    setIsOpenedSignUp(false);
  };
  const handleOpenSignUp = () => {
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
        <Avatar sx={{ m: 1, bgcolor: 'primary.contrastText' }} />
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
            onChange={handleChangeFieldEmail}
            error={emailError}
            helperText={emailHelperText}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="email"
          />
          <TextField
            onChange={handleChangeFieldPassword}
            error={passwordError}
            helperText={passwordHelperText}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {isSignUp && (
            <TextField
              onChange={handleChangeFieldConfirmPassword}
              error={confirmPasswordError}
              helperText={confirmPasswordHelperText}
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              autoComplete="current-password"
            />
          )}
          {/** <Typography variant="body2" sx={{ color: '#FF4040' }}> */}
          {/** TODO: display authErrorMessage when axios hook applies. */}
          {/** {authErrorMessage} */}
          {/** </Typography> */}
          {!isSignUp ? (
            <Button disabled={isDisabledSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          ) : (
            <Button disabled={isDisabledSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
          )}
          <Grid container justifyContent="flex-end">
            <Grid item>
              {!isSignUp ? (
                <Button onClick={handleOpenSignUp}>Don&apos;t have an account?</Button>
              ) : (
                <Button onClick={handleOpenSignIn}>Already have an account?</Button>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
