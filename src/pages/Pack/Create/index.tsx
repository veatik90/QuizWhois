import { Box } from '@mui/material';
import React, { FC } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { useSubmitCreatePack } from './hooks/useSubmitCreatePack';
import { useFieldValidation } from '../../../shared/hooks/validation/hooks/useFieldValidation';
import { useFormValidation } from '../../../shared/hooks/validation/hooks/useFormValidation';
import { ValidationTypes } from '../../../shared/constants/validationConstants';
import { withTabs } from '../../../hoc/withTabs';

const PackCreation: FC = () => {
  const { handleSubmitCreatePack } = useSubmitCreatePack();
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
        Создание пакета
      </Typography>
      <Box component="form" onSubmit={handleSubmitCreatePack} noValidate sx={{ mt: 1 }}>
        <TextField
          onChange={nameHandleChange}
          error={nameErrorDisplay}
          helperText={nameHelperText}
          margin="normal"
          required
          fullWidth
          id="name"
          name="name"
          label="Название пакета"
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
          id="description"
          name="description"
          label="Описание пакета"
          multiline
        />
        <Button
          component={NavLink}
          to="/question-crud"
          disabled={isDisabledSubmit}
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Создать и перейти к вопросам
        </Button>
      </Box>
    </Container>
  );
};

export const PackCreationPage = withTabs(PackCreation);