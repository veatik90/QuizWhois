import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Prompt } from 'react-router';

export function PackCreation() {
  return (
    <>
      <Box sx={{ alignItems: 'center' }}>
        <Button>Primary</Button>
        <Button>Disabled</Button>
        <Button>Link</Button>
      </Box>
      <Prompt when message="You're leaving without saving." />
    </>
  );
}
