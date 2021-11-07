import * as React from 'react';
import Box from '@mui/material/Box';
import { Prompt } from 'react-router';

export function GameCatalog() {
  return (
    <Box sx={{ width: '100%' }}>
      GameCatalog
      <Prompt when message="Are you sure you want to leave?" />
    </Box>
  );
}
