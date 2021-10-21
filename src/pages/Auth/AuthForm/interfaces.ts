export interface AuthFormProps {
  isSignUp: boolean;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  authErrorMessage: undefined;
  setIsOpenedSignUp(open: boolean): void;
}
