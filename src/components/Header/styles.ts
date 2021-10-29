import { Box, MenuItem, Typography } from '@mui/material';
import styled from 'styled-components';

const heightOfHeader = 64;

export const BoxStyled = styled(Box)`
  flex-grow: 1;
  height: ${heightOfHeader}px;
`;

export const SecondaryTextStyled = styled(Typography)`
  &.email-title {
    flex-grow: 1;
    font-size: 13px;
    padding: 0 16px 8px 16px;
    color: gray;
  }
`;

export const SecondaryTextWithBorderStyled = styled(SecondaryTextStyled)`
  padding-bottom: 8px;
  border-bottom: 1px solid gray;
  margin-bottom: 6px;
`;

export const LoginTypographyStyled = styled(Typography)`
  &.login-title {
    font-weight: 700;
    line-height: 0.7;
    margin-top: 6px;
  }
`;

export const LogoutStyled = styled(MenuItem)`
  &.logout-menu-item {
    border-top: 1px solid gray;
    margin-top: 6px;
  }
`;
