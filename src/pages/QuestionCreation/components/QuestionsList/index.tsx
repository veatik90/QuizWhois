/* eslint-disable @typescript-eslint/no-unused-vars */
import { Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';
import { SwipeableEdgeDrawer } from '../../../QuestionCrud/components/Drower';
import {
  BoxWithBorderStyled,
  QuestionsStackStyled,
  QuestionSpanStyled,
  SavePackButtonStyled,
} from '../../../QuestionCrud/styles';
import { IQuestionsList } from './interfaces';

export const QuestionsList: FC<IQuestionsList> = ({ questions, allHandleQuestionClick, handleSavePack }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(`(min-width:${theme.breakpoints.values.sm}px)`);

  return (
    <>
      {isDesktop ? (
        <Grid item xs={4} ml={10}>
          <BoxWithBorderStyled className="QuestionsBox">
            <QuestionsStackStyled position="static">
              {questions.length > 0 ? (
                questions.map((elem, index) => (
                  <QuestionSpanStyled key={elem.id} onClick={() => allHandleQuestionClick(elem.id)}>
                    <p className="questionP">{`${index + 1}) ${elem.question}`}</p>
                  </QuestionSpanStyled>
                ))
              ) : (
                <Typography align="center" color="gray">
                  Пока нет созданных вопросов
                </Typography>
              )}
            </QuestionsStackStyled>
            <SavePackButtonStyled
              disabled={false} // {isDisabledSubmitPack}
              variant="contained"
              fullWidth
              onClick={handleSavePack}
            >
              Сохранить пакет
            </SavePackButtonStyled>
          </BoxWithBorderStyled>
        </Grid>
      ) : (
        <SwipeableEdgeDrawer questions={questions} handleQuestionQlick={allHandleQuestionClick} />
      )}
    </>
  );
};
