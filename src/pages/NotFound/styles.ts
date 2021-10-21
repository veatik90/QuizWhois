import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledBox = styled(Box)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledStack = styled(Stack)`
  direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
  }
`;
