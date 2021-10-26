import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const BoxStyled = styled(Box)`
  width: 100%;
  height: calc(100vh - 102px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StackStyled = styled(Stack)`
  direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
  }
`;
