import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthForm } from './AuthForm';
import { PASSWORD_MISMATCH, WRONG_EMAIL, EMPTY_FIELDS } from './AuthForm/constants';

export const Auth: FC = () => {
  const [isOpenedSignUp, setIsOpenedSignUp] = useState(false);
  const [authErrorMessage, setAuthErrorMessage] = useState(undefined);
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
  const handleBlurFieldEmail = (event: React.FocusEvent<HTMLInputElement>): void => {
    const inputValue: string = event.target.value;
    const emailMask = new RegExp('.+@.+\\..+');
    const validEmail: boolean = emailMask.test(inputValue);
    setEmailValue(inputValue);
    if (inputValue.length === 0 || !validEmail) {
      setEmailError(true);
      if (inputValue.length === 0) {
        setEmailHelperText(EMPTY_FIELDS);
      } else {
        setEmailHelperText(WRONG_EMAIL);
      }
    } else {
      setEmailError(false);
      setEmailHelperText('');
    }
  };
  const handleBlurFieldPassword = (event: React.FocusEvent<HTMLInputElement>): void => {
    const inputValue: string = event.target.value;
    setPasswordValue(inputValue);
    if (inputValue.length === 0) {
      setPasswordError(true);
      setPasswordHelperText(EMPTY_FIELDS);
    } else {
      setPasswordError(false);
      setPasswordHelperText('');
    }
  };
  const handleBlurFieldConfirmPassword = (event: React.FocusEvent<HTMLInputElement>): void => {
    setConfirmPasswordValue(event.target.value);
    if (event.target.value.length === 0) {
      setConfirmPasswordError(true);
      setConfirmPasswordHelperText(EMPTY_FIELDS);
    }
  };
  useEffect((): void => {
    if (confirmPasswordValue.length !== 0) {
      const passwordMismatch = confirmPasswordValue !== passwordValue;
      if (passwordMismatch) {
        setConfirmPasswordError(true);
        setConfirmPasswordHelperText(PASSWORD_MISMATCH);
      } else {
        setConfirmPasswordError(false);
        setConfirmPasswordHelperText('');
      }
    }
  });
  const history = useHistory();
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
  /**
  TODO: ESlint заставляет писать конкретно этот return в одну строку,
   но в таком случае сам же ругается на превышение длины строки.
  */
  // eslint-disable-next-line max-len
  return (
    <>
      {!isOpenedSignUp ? (
        // eslint-disable-next-line max-len
        <AuthForm
          setIsOpenedSignUp={setIsOpenedSignUp}
          isDisabledSubmit={isDisabledSubmit}
          authErrorMessage={authErrorMessage}
          onSubmit={handleSubmit}
          emailHelperText={emailHelperText}
          passwordHelperText={passwordHelperText}
          handleBlurFieldEmail={handleBlurFieldEmail}
          handleBlurFieldPassword={handleBlurFieldPassword}
          passwordError={passwordError}
          emailError={emailError}
        />
      ) : (
        <AuthForm
          isSignUp
          setIsOpenedSignUp={setIsOpenedSignUp}
          authErrorMessage={authErrorMessage}
          onSubmit={handleSubmit}
          handleBlurFieldEmail={handleBlurFieldEmail}
          handleBlurFieldPassword={handleBlurFieldPassword}
          handleBlurFieldConfirmPassword={handleBlurFieldConfirmPassword}
          emailHelperText={emailHelperText}
          passwordHelperText={passwordHelperText}
          confirmPasswordHelperText={confirmPasswordHelperText}
          isDisabledSubmit={isDisabledSubmit}
          passwordError={passwordError}
          emailError={emailError}
          confirmPasswordError={confirmPasswordError}
        />
      )}
    </>
  );
};
