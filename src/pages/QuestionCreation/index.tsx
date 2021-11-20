/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */

import { Button, Grid, Stack, TextField } from '@mui/material';
import { FC, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import * as React from 'react';
import {
  BoxWithBorderStyled,
  GridStyled,
  QuestionSpanStyled,
  QuestionsStackStyled,
  SavePackButtonStyled,
} from './styles';
import { withTabs } from '../../hoc/withTabs';
import { useQuestionCRUD } from './components/hooks/useQuestionCRUD';
import { useQuestionValidation } from './components/hooks/useQuestionValidation';

const QuestionCreation: FC = () => {
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
      <Grid item xs={4}>
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
          <Stack direction="row" justifyContent={isEdit ? 'space-between' : 'flex-end'}>
            {isEdit ? (
              <Button variant="outlined" onClick={() => allHandleQuestionDelete()}>
                Удалить вопрос
              </Button>
            ) : null}
            <Button disabled={isDisabledSubmitQuestion} variant="contained" onClick={allHandleQuestionSave}>
              Сохранить вопрос
            </Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={4} ml={10}>
        <BoxWithBorderStyled className="QuestionsBox">
          <QuestionsStackStyled position="static">
            {questions.map((elem, index) => (
              <QuestionSpanStyled key={elem.id} onClick={() => allHandleQuestionClick(elem.id)}>
                <p className="questionP">{`${index + 1}) ${elem.question}`}</p>
              </QuestionSpanStyled>
            ))}
          </QuestionsStackStyled>
          <SavePackButtonStyled disabled={isDisabledSubmitPack} variant="contained" fullWidth onClick={handleSavePack}>
            Сохранить пакет
          </SavePackButtonStyled>
        </BoxWithBorderStyled>
      </Grid>
    </GridStyled>
  );
};

export const QuestionCreationPage = withTabs(QuestionCreation);
