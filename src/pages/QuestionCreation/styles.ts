import styled from 'styled-components';
import { Box, Button, Grid } from '@mui/material';
import { HEADER_HEIGHT } from '../../shared/constants';
import { theme } from '../../theme';

export const AnswerFieldStyled = styled.div`
  box-sizing: content-box;
  min-height: 30px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 16.5px 14px;
`;

export const AnswerBlockStyled = styled.span`
  background-color: primary;
`;

export const AnswerStyled = styled.p`
  margin: 0;
`;

export const GridStyled = styled(Grid)`
  &.QuestionCreationPageBlock {
    height: calc(100vh - ${HEADER_HEIGHT}px);
    justify-content: center;
    padding-top: 50px;
    position: relative;
    margin-top: 0px;
  }
`;

export const BoxWithBorderStyled = styled(Box)`
  &.QuestionsBox {
    position: relative;
    border: 1px solid lightgrey;
    border-radius: 3px;
    height: 70vh;
    width: 100%;
    padding: 14px 16px;
  }
`;

export const SavePackButtonStyled = styled(Button)`
  position: absolute;
  bottom: 0px;
  height: 70px;
  align-items: center;
  z-index: 1;
`;

export const QuestionSpanStyled = styled.span`
  margin-bottom: 10px;
  & p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    margin: 0;
  }
  &:hover {
    cursor: pointer;
    background-color: ${theme.palette.primary.main};
    color: white;
  }
`;
