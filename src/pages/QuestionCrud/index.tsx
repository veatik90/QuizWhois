/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, Grid, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FC, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import * as React from 'react';
import { SwipeableEdgeDrawer } from './components/Drower';
import {
  BoxWithBorderStyled,
  GridStyled,
  QuestionSpanStyled,
  QuestionsStackStyled,
  SavePackButtonStyled,
} from './styles';
import { withTabs } from '../../hoc/withTabs';
import { useQuestionCRUD } from './hooks/useQuestionCRUD';
import { useQuestionValidation } from './hooks/useQuestionValidation';

const QuestionCrud: FC = () => {
  const {
    handleChangeQuestion,
    handleChangeAnswers,
    handleAnswerChange,
    handleAnswerBlur,
    handleQuestionDelete,
    handleQuestionSave,
    handleQuestionClick,
    question,
    answers,
    answer,
    isEdit,
    questions,
  } = useQuestionCRUD();

  const theme = useTheme();
  const isDesktop = useMediaQuery(`(min-width:${theme.breakpoints.values.sm}px)`);
  const {
    handleValidationQuestionSave,
    handleValidationQuestionClick,
    handleValidationQuestionChange,
    handleValidationAnswersChange,
    answersErrorDisplay,
    answersHelperText,
    questionErrorDisplay,
    questionHelperText,
    isDisabledSubmitQuestion,
    isDisabledSubmitPack,
    questionsValidator,
  } = useQuestionValidation();

  useEffect(() => {
    questionsValidator(questions);
  }, [questionsValidator, questions]);

  const handleSavePack = () => {
    console.log('save pack');
  };

  const allHandleQuestionSave = () => {
    handleValidationQuestionSave();
    handleQuestionSave();
  };

  const allHandleQuestionDelete = () => {
    handleValidationQuestionSave();
    handleQuestionDelete();
  };

  const allHandleQuestionClick = (elemId: number) => {
    handleQuestionClick(elemId);
    handleValidationQuestionClick(questions);
  };

  const allHandleQuestionChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleValidationQuestionChange(event);
    handleChangeQuestion(event);
  };

  const allHandleAnswerChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleValidationAnswersChange(event);
    handleAnswerChange(event);
  };

  return (
    <GridStyled className="QuestionCreationPageBlock" container spacing={2}>
      <Grid item xs={isDesktop ? 4 : 7}>
        <Stack spacing={2}>
          <TextField
            onChange={allHandleQuestionChange}
            error={questionErrorDisplay}
            helperText={questionHelperText}
            label="Введите вопрос"
            value={question}
            multiline
            rows={4}
          />
          <Autocomplete
            value={answers}
            onChange={handleChangeAnswers}
            freeSolo
            multiple
            options={[] as string[]}
            renderTags={(value: readonly string[], getTagProps) => {
              return value.map((option: string, index: number) => (
                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
              ));
            }}
            renderInput={(params) => (
              <TextField
                error={answersErrorDisplay}
                helperText={answersHelperText}
                {...params}
                onChange={allHandleAnswerChange}
                onBlur={handleAnswerBlur}
                value={answer}
                label="Введите варианты ответов"
              />
            )}
          />
          <Stack
            spacing={2}
            direction={isDesktop ? 'row' : 'column-reverse'}
            justifyContent={isEdit ? 'space-between' : 'flex-end'}
          >
            {isEdit ? (
              <Button variant="outlined" onClick={() => allHandleQuestionDelete()}>
                Удалить вопрос
              </Button>
            ) : null}
            <Button disabled={isDisabledSubmitQuestion} variant="contained" onClick={allHandleQuestionSave}>
              Сохранить вопрос
            </Button>
          </Stack>
          {isDesktop ? null : (
            <SavePackButtonStyled variant="contained" fullWidth onClick={handleSavePack}>
              Сохранить пакет
            </SavePackButtonStyled>
          )}
        </Stack>
      </Grid>
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
              disabled={isDisabledSubmitPack}
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
    </GridStyled>
  );
};

export const QuestionCrudPage = withTabs(QuestionCrud);
