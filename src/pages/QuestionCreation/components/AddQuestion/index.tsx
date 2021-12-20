/* eslint-disable react/jsx-props-no-spreading */
import { Grid, Stack, TextField, Autocomplete, Chip, Button, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';
import { SavePackButtonStyled } from '../../../QuestionCrud/styles';
import { IAddQuestion } from './interfaces';

export const AddQuestion: FC<IAddQuestion> = ({
  question,
  answers,
  answer,
  allHandleQuestionChange,
  allHandleQuestionDelete,
  allHandleQuestionSave,
  questionErrorDisplay,
  questionHelperText,
  handleChangeAnswers,
  answersErrorDisplay,
  answersHelperText,
  allHandleAnswerChange,
  handleAnswerBlur,
  handleSavePack,
  isEdit,
  isDisabledSubmitQuestion,
  isDisabledSubmitPack,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(`(min-width:${theme.breakpoints.values.sm}px)`);

  return (
    <Grid item xs={isDesktop ? 4 : 10}>
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
          <SavePackButtonStyled disabled={isDisabledSubmitPack} variant="contained" fullWidth onClick={handleSavePack}>
            Сохранить пакет
          </SavePackButtonStyled>
        )}
      </Stack>
    </Grid>
  );
};
