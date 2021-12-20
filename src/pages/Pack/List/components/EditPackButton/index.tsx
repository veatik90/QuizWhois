import React, { FC, useState } from 'react';
import { CircularProgress, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router';
import { ButtonProps } from './interfaces';

export const EditPackButton: FC<ButtonProps> = ({ packId }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const handleClickButton = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      history.push(`/pack-update/${packId}`);
    }, 1000);
  };

  return (
    <IconButton disabled={isLoading} onClick={handleClickButton} edge="end" aria-label="update packet">
      {!isLoading ? <EditIcon /> : <CircularProgress color="inherit" size={24} />}
    </IconButton>
  );
};
