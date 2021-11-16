import styled from 'styled-components';
import { Box, Button, Grid, Stack } from '@mui/material';
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
    padding-top: 8.5vh;
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
    display: flex;
    flex-direction: column;
  }
`;

export const SavePackButtonStyled = styled(Button)`
  display: flex;
  align-self: flex-end;
  height: 70px;
  align-items: center;
  margin: 0 16px;
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
    color: ${theme.palette.primary.contrastText};
  }
`;

export const QuestionsStackStyled = styled(Stack)`
  height: 100%;
  padding: 14px 16px;
  overflow-y: auto;
`;
