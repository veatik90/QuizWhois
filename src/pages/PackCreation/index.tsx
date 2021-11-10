import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Prompt } from 'react-router';
import { withTabs } from '../../hoc/withTabs';

export function PackCreation() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'secondary', width: '120px' }}>
        <Button sx={{ width: '120px' }}>Каталог игр</Button>
        <Button sx={{ width: '120px' }}>Архив игр</Button>
        <Button sx={{ width: '120px' }}>Тренировочная игра</Button>
      </Box>
      <br />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button variant="contained" sx={{ width: '120px' }}>
          Primary
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" sx={{ width: '120px' }}>
          Disabled
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" sx={{ width: '120px' }}>
          Link
        </Button>
      </Box>
      <br />
      <Box sx={{ alignItems: 'center' }}>
        <Button variant="outlined">Primary</Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined">Disabled</Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined">Link</Button>
      </Box>
      <Prompt when message="You're leaving without saving." />
    </>
  );
}

export const PackCreationPage = withTabs(PackCreation);
