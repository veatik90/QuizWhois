import { Box, ListItemText, Typography } from '@mui/material';
import styled from 'styled-components';
import { drawerBleeding } from '../../../../shared/constants';

// export const Root = styled('div')`
//   height: 100%;
// `;

// export const StyledBox = styled(Box)`
// `;

export const QuestionsNumberBoxStyled = styled(Box)`
  &.questions-number-box {
    background-color: ${({ theme }): string => theme.palette.primary.main};
    position: absolute;
    top: -${drawerBleeding}px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    visibility: visible;
    right: 0;
    left: 0;
  }
`;

export const QuestionsListBoxStyled = styled(Box)`
  background-color: ${({ theme }): string => theme.palette.primary.main};
  padding: 0 16px 16px 16px;
  height: 100%;
  overflow: auto;
`;

export const Puller = styled(Box)`
  width: 30px;
  height: 6px;
  background-color: ${({ theme }): string => theme.palette.primary.contrastText};
  border-radius: 3px;
  position: absolute;
  top: 8px;
  left: calc(50% - 15px);
`;

export const QuestionsNumberStyled = styled(Typography)`
  padding: 16px 16px 16px 32px;
  color: ${({ theme }): string => theme.palette.primary.contrastText};
`;

export const ListItemTextStyled = styled(ListItemText)`
  .MuiListItemText-primary {
    color: ${({ theme }): string => theme.palette.primary.contrastText};
  }
`;
