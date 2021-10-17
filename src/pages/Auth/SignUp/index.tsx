import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import { useHistory } from 'react-router';
import { SignUpProps } from './interfaces';

export const SignUp: FC<SignUpProps> = ({ setOpenSignUp }) => {
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailHelperText, setEmailHelperText] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordHelperText, setPasswordHelperText] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);
  const [confirmPasswordHelperText, setConfirmPasswordHelperText] = useState<string>('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>('');
  const [isDisabledSubmit, setIsDisabledSubmit] = useState<boolean>(true);
  useEffect(() => {
    const emailNotEmpty: boolean = emailValue.length !== 0;
    const passNotEmpty: boolean = passwordValue.length !== 0;
    const confirmPassNotEmpty: boolean = confirmPasswordValue.length !== 0;
    const noErrors: boolean = !confirmPasswordError && !emailError && !passwordError;
    const noEmptyFields: boolean = emailNotEmpty && passNotEmpty && confirmPassNotEmpty;
    if (noErrors && noEmptyFields) {
      setIsDisabledSubmit(false);
    } else {
      setIsDisabledSubmit(true);
    }
  });
  const history = useHistory();
  const success = () => history.push('/');
  const [authErrorMessage, setAuthErrorMessage] = React.useState(undefined);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console
      console.log({
        email: data.get('email'),
        password: data.get('password'),
        confirmPassword: data.get('confirm-password'),
      });
      success();
    } catch (err: any) {
      setAuthErrorMessage(err.message);
    }
  };
  const handleBlurFieldEmail = (event: React.FocusEvent<HTMLInputElement>): void => {
    const inputValue: string = event.target.value;
    const emailMask = new RegExp('.+@.+\\..+');
    const validEmail: boolean = emailMask.test(inputValue);
    setEmailValue(inputValue);
    if (inputValue.length === 0 || !validEmail) {
      setEmailError(true);
      if (inputValue.length === 0) {
        setEmailHelperText("The field can't be empty.");
      } else {
        setEmailHelperText('Email is not correct.');
      }
    } else {
      setEmailError(false);
      setEmailHelperText('');
    }
  };
  const handleBlurFieldPassword = (event: React.FocusEvent<HTMLInputElement>): void => {
    const inputValue: string = event.target.value;
    setPasswordValue(inputValue);
    if (inputValue.length === 0 || inputValue.length < 6) {
      setPasswordError(true);
      if (inputValue.length === 0) {
        setPasswordHelperText("The field can't be empty.");
      } else {
        setPasswordHelperText("Password can't have less 6 symbols.");
      }
    } else {
      setPasswordError(false);
      setPasswordHelperText('');
    }
  };
  const handleBlurFieldConfirmPassword = (event: React.FocusEvent<HTMLInputElement>): void => {
    setConfirmPasswordValue(event.target.value);
    if (event.target.value.length === 0) {
      setConfirmPasswordError(true);
      setConfirmPasswordHelperText("The field can't be empty.");
    }
  };
  useEffect((): void => {
    if (confirmPasswordValue.length !== 0) {
      const passwordMismatch = confirmPasswordValue !== passwordValue;
      if (passwordMismatch) {
        setConfirmPasswordError(true);
        setConfirmPasswordHelperText('Password mismatch.');
      } else {
        setConfirmPasswordError(false);
        setConfirmPasswordHelperText('');
      }
    }
  });
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
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            onBlur={handleBlurFieldEmail}
            error={emailError}
            helperText={emailHelperText}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
          />
          <TextField
            onBlur={handleBlurFieldPassword}
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
          <TextField
            onBlur={handleBlurFieldConfirmPassword}
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
          {authErrorMessage}
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button disabled={isDisabledSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>

          <Divider />
          <p>
            Already have an account?
            <Button onClick={() => setOpenSignUp(false)}>SignIn</Button>
          </p>
        </Box>
      </Box>
    </Container>
  );
};
