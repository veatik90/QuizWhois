import { Box } from '@mui/material';
import React, { FC } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useSubmitCreateQuiz } from '../components/hooks/useSubmitCreateQuiz';
import { useFieldValidation } from '../../../components/validation/hooks/useFieldValidation';
import { useFormValidation } from '../../../components/validation/hooks/useFormValidation';
import { ValidationTypes } from '../../../shared/constants/validationConstants';

export const QuizCreate: FC = () => {
  const { handleSubmitCreateQuiz } = useSubmitCreateQuiz();
  const {
    errorDisplay: nameErrorDisplay,
    errorValidation: nameErrorValidation,
    helperText: nameHelperText,
    handleChange: nameHandleChange,
  } = useFieldValidation([ValidationTypes.REQUIRED]);
  const {
    errorDisplay: descriptionErrorDisplay,
    errorValidation: descriptionErrorValidation,
    helperText: descriptionHelperText,
    handleChange: descriptionHandleChange,
  } = useFieldValidation([ValidationTypes.REQUIRED]);
  const { isDisabledSubmit } = useFormValidation([nameErrorValidation, descriptionErrorValidation]);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Typography component="h1" variant="h5" sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
        Quiz
      </Typography>
      <Box component="form" onSubmit={handleSubmitCreateQuiz} noValidate sx={{ mt: 1 }}>
        <TextField
          onChange={nameHandleChange}
          error={nameErrorDisplay}
          helperText={nameHelperText}
          margin="normal"
          required
          fullWidth
          id="quizName"
          label="Name"
          name="quizName"
          autoFocus
          multiline
        />
        <TextField
          onChange={descriptionHandleChange}
          error={descriptionErrorDisplay}
          helperText={descriptionHelperText}
          margin="normal"
          required
          fullWidth
          id="quizDescription"
          label="Description"
          name="quizDescription"
          multiline
        />
        <Button disabled={isDisabledSubmit} type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Create and go to questions
        </Button>
      </Box>
    </Container>
  );
};
