import React, { FC } from 'react';
import { AuthForm } from '../components/AuthForm';
import { useFieldEmail } from '../hooks/fields/useFieldEmail';
import { useFieldPassword } from '../hooks/fields/useFieldPassword';
import { useFormValidation } from '../hooks/forms/useFormValidation';
import { useFormSubmit } from '../hooks/forms/useFormSubmit';
import { SignInProps } from './interfaces';

export const SignIn: FC<SignInProps> = ({ setIsOpenedSignUp }) => {
  const {
    errorDisplay: emailErrorDisplay,
    errorValidation: emailErrorValidation,
    helperText: emailHelperText,
    handleChange: emailHandleChange,
  } = useFieldEmail();
  const {
    errorDisplay: passwordErrorDisplay,
    errorValidation: passwordErrorValidation,
    helperText: passwordHelperText,
    handleChange: passwordHandleChange,
  } = useFieldPassword();
  const { isDisabledSubmit } = useFormValidation(emailErrorValidation, passwordErrorValidation);
  const { handleSubmit } = useFormSubmit();

  return (
    <AuthForm
      setIsOpenedSignUp={setIsOpenedSignUp}
      isDisabledSubmit={isDisabledSubmit}
      onSubmit={handleSubmit}
      emailError={emailErrorDisplay}
      emailHelperText={emailHelperText}
      handleChangeFieldEmail={emailHandleChange}
      passwordError={passwordErrorDisplay}
      passwordHelperText={passwordHelperText}
      handleChangeFieldPassword={passwordHandleChange}
    />
  );
};
