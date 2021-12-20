import React, { FC } from 'react';
import { AuthForm } from '../components/AuthForm';
import { useFieldEmail } from '../hooks/fields/useFieldEmail';
import { useFieldPassword } from '../hooks/fields/useFieldPassword';
import { useFieldConfirmPassword } from '../hooks/fields/useFieldConfirmPassword';
import { useFormValidation } from '../hooks/forms/useFormValidation';
import { useFormSubmit } from '../hooks/forms/useFormSubmit';
import { SignUpProps } from './interfaces';

export const SignUp: FC<SignUpProps> = ({ setIsOpenedSignUp }) => {
  const {
    errorDisplay: emailErrorDisplay,
    errorValidation: emailErrorValidation,
    helperText: emailHelperText,
    handleChange: emailHandleChange,
  } = useFieldEmail();
  const {
    value: passwordValue,
    errorDisplay: passwordErrorDisplay,
    errorValidation: passwordErrorValidation,
    helperText: passwordHelperText,
    handleChange: passwordHandleChange,
  } = useFieldPassword();
  const {
    errorDisplay: confirmPasswordErrorDisplay,
    errorValidation: confirmPasswordErrorValidation,
    helperText: confirmPasswordHelperText,
    handleChange: confirmPasswordHandleChange,
  } = useFieldConfirmPassword(passwordValue);
  const { isDisabledSubmit } = useFormValidation(
    emailErrorValidation,
    passwordErrorValidation,
    confirmPasswordErrorValidation,
  );
  const { handleSubmit } = useFormSubmit();

  return (
    <AuthForm
      isSignUp
      setIsOpenedSignUp={setIsOpenedSignUp}
      isDisabledSubmit={isDisabledSubmit}
      onSubmit={handleSubmit}
      emailError={emailErrorDisplay}
      emailHelperText={emailHelperText}
      handleChangeFieldEmail={emailHandleChange}
      passwordError={passwordErrorDisplay}
      passwordHelperText={passwordHelperText}
      handleChangeFieldPassword={passwordHandleChange}
      confirmPasswordError={confirmPasswordErrorDisplay}
      confirmPasswordHelperText={confirmPasswordHelperText}
      handleChangeFieldConfirmPassword={confirmPasswordHandleChange}
    />
  );
};
