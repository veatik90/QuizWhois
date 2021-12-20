/* eslint-disable no-console */

import React, { FC, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { CircularProgress, IconButton } from '@mui/material';
import { ButtonProps } from './interfaces';

export const DeleteButton: FC<ButtonProps> = ({ packId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClickButton = () => {
    console.log(packId);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      console.log({
        status: 'success',
        message: 'Pack success deleted.',
        error: '',
        data: [],
      });
    }, 1000);
  };

  return (
    <IconButton disabled={isLoading} onClick={handleClickButton} edge="end" aria-label="delete packet with questions">
      {!isLoading ? <DeleteIcon /> : <CircularProgress color="inherit" size={24} />}
    </IconButton>
  );
};
