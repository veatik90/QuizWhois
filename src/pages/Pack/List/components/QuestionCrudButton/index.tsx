import React, { FC, useState } from 'react';
import { CircularProgress, IconButton } from '@mui/material';
import { useHistory } from 'react-router';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { ButtonProps } from './interfaces';

export const QuestionCrudButton: FC<ButtonProps> = ({ packId }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const handleClickButton = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      history.push(`/question-crud/${packId}`);
    }, 1000);
  };

  return (
    <IconButton disabled={isLoading} onClick={handleClickButton} edge="end" aria-label="crud questions">
      {!isLoading ? <AppRegistrationIcon /> : <CircularProgress color="inherit" size={24} />}
    </IconButton>
  );
};
