import * as React from 'react';
import Box from '@mui/material/Box';
import { Prompt } from 'react-router';

export function PackCreation() {
  return (
    <Box sx={{ width: '100%' }}>
      PackCreation
      <Prompt when message="Are you sure you want to leave?" />
    </Box>
  );
}
