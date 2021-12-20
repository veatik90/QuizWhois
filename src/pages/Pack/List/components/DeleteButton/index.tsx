/* eslint-disable no-console */

import React, { FC, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { CircularProgress, IconButton } from '@mui/material';
import { ButtonProps } from './interfaces';

export const DeleteButton: FC<ButtonProps> = ({ packId, packs, setPacks }) => {
  const [isLoading, setIsLoading] = useState(false);
  const newPacks = [...packs];

  const handleClickButton = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      console.log({
        status: 'success',
        message: 'Pack success deleted.',
        error: '',
        data: [],
      });

      newPacks.splice(packId - 1, 1);
      setPacks(newPacks);
    }, 1000);
  };

  return (
    <IconButton disabled={isLoading} onClick={handleClickButton} edge="end" aria-label="delete packet with questions">
      {!isLoading ? <DeleteIcon /> : <CircularProgress color="inherit" size={24} />}
    </IconButton>
  );
};
