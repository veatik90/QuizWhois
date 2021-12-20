import { Box } from '@mui/material';
import React, { FC, useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useSubmitCreatePack } from './components/hooks/useSubmitCreatePack';
import { useFieldValidation } from '../../../shared/utils/validation/hooks/useFieldValidation';
import { useFormValidation } from '../../../shared/utils/validation/hooks/useFormValidation';
import { ValidationTypes } from '../../../shared/constants/validationConstants';
import { withTabs } from '../../../hoc/withTabs';
import { getPackById } from '../../../shared/mocks/packsMock';

const PackUpdate: FC = () => {
  const location = useLocation();
  const packId = Number(location.pathname.split('/').pop());
  const data = getPackById(packId);

  const { handleSubmitCreatePack } = useSubmitCreatePack();
  const {
    errorDisplay: nameErrorDisplay,
    errorValidation: nameErrorValidation,
    helperText: nameHelperText,
    handleChange: nameHandleChange,
  } = useFieldValidation([ValidationTypes.REQUIRED], false);
  const {
    errorDisplay: descriptionErrorDisplay,
    errorValidation: descriptionErrorValidation,
    helperText: descriptionHelperText,
    handleChange: descriptionHandleChange,
  } = useFieldValidation([ValidationTypes.REQUIRED], false);
  const { isDisabledSubmit } = useFormValidation([nameErrorValidation, descriptionErrorValidation]);

  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);

  const handlesOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    nameHandleChange(event);
  };
  const handlesOnChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
    descriptionHandleChange(event);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Typography component="h1" variant="h5" sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
        Редактирование пакета
      </Typography>
      <Box component="form" onSubmit={handleSubmitCreatePack} noValidate sx={{ mt: 1 }}>
        <TextField
          value={name}
          onChange={handlesOnChangeName}
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
          value={description}
          onChange={handlesOnChangeDescription}
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
          // component={NavLink}
          // to="/question-creation"
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

export const PackUpdatePage = withTabs(PackUpdate);
