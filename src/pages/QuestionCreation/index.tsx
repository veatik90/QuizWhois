/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */

import { Button, Grid, Stack, TextField } from '@mui/material';
import { FC, SyntheticEvent, useState } from 'react';
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
import { IQuestion } from './interfaces';
import { useFieldValidation } from '../../shared/utils/validation/hooks/useFieldValidation';
import { ValidationTypes } from '../../shared/constants/validationConstants';
import { useFormValidation } from '../../shared/utils/validation/hooks/useFormValidation';
import { withTabs } from '../../hoc/withTabs';

const QuestionCreation: FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [id, setId] = useState(0);
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [answer, setAnswer] = useState('example');
  const [isEdit, setIsEdit] = useState(false);
  const [isDisabledSubmitPack, setIsDisabledSubmitPack] = useState(true);

  const {
    errorDisplay: answersErrorDisplay,
    errorValidation: answersErrorValidation,
    helperText: answersHelperText,
    handleChange: answersHandleChange,
    validationSetEmptyValue: answersValidationSetEmptyValue,
    validationSetValue: answersValidationSetValue,
  } = useFieldValidation([ValidationTypes.REQUIRED]);
  const {
    errorDisplay: questionErrorDisplay,
    errorValidation: questionErrorValidation,
    helperText: questionHelperText,
    handleChange: questionHandleChange,
    validationSetEmptyValue: questionValidationSetEmptyValue,
    validationSetValue: questionValidationSetValue,
  } = useFieldValidation([ValidationTypes.REQUIRED]);

  const { isDisabledSubmit: isDisabledSubmitQuestion } = useFormValidation([
    answersErrorValidation,
    questionErrorValidation,
  ]);

  const handleChangeQuestion = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuestion(event.target.value);
  };

  const handleChangeAnswers = (event: SyntheticEvent<Element, Event>, value: string[]) => {
    setAnswers(value);
  };

  const questionsValidator = (checkQuestions: IQuestion[]) => {
    if (checkQuestions.length === 0) {
      setIsDisabledSubmitPack(true);
    } else {
      setIsDisabledSubmitPack(false);
    }
  };

  const handleQuestionSave = () => {
    const isNotNewQuestion = questions.filter((elem) => elem.id === id).length === 1;
    if (isNotNewQuestion) {
      for (let i = 0; i < questions.length; i += 1) {
        if (questions[i].id === id) {
          questions[i] = { id, question, answers };
          break;
        }
      }
    } else {
      questions.push({ id, question, answers });
    }

    setQuestions(questions);
    setAnswers([]);
    setQuestion('');
    setId(questions.length);
    setIsEdit(false);

    answersValidationSetEmptyValue();
    questionValidationSetEmptyValue();

    questionsValidator(questions);
  };

  const handleQuestionDelete = (elemId: number) => {
    const actualQuestions = questions.filter((elem) => elem.id !== elemId);
    setQuestions(actualQuestions);
    setAnswers([]);
    setQuestion('');
    setId(elemId);
    setIsEdit(false);

    questionsValidator(actualQuestions);
  };

  const handleQuestionClick = (elemId: number) => {
    const [tmpQuestion] = questions.filter((elem) => elem.id === elemId);
    console.log(tmpQuestion, elemId, questions);
    setId(tmpQuestion.id);
    setQuestion(tmpQuestion.question);
    setAnswers(tmpQuestion.answers);
    setIsEdit(true);

    questionValidationSetValue(tmpQuestion.question);
    answersValidationSetValue(tmpQuestion.answers[0] ? tmpQuestion.answers[0] : '');
  };

  const handleSavePack = () => {
    console.log('save pack');
  };

  const handleAnswerBlur = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value) {
      answers.push(event.target.value);
      setAnswers(answers);
      setAnswer('');
    }
  };

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    setAnswer(event.target.value);
    answersHandleChange(event);
  };

  return (
    <GridStyled className="QuestionCreationPageBlock" container spacing={2}>
      <Grid item xs={4}>
        <Stack spacing={2}>
          <TextField
            onChange={(event) => {
              questionHandleChange(event);
              handleChangeQuestion(event);
            }}
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
                onChange={handleAnswerChange}
                onBlur={handleAnswerBlur}
                value={answer}
                label="Введите варианты ответов"
              />
            )}
          />
          <Stack direction="row" justifyContent={isEdit ? 'space-between' : 'flex-end'}>
            {isEdit ? (
              <Button variant="outlined" onClick={() => handleQuestionDelete(id)}>
                Удалить вопрос
              </Button>
            ) : null}
            <Button disabled={isDisabledSubmitQuestion} variant="contained" onClick={handleQuestionSave}>
              Сохранить вопрос
            </Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={4} ml={10}>
        <BoxWithBorderStyled className="QuestionsBox">
          <QuestionsStackStyled position="static">
            {questions.map((elem, index) => (
              <QuestionSpanStyled key={elem.id} onClick={() => handleQuestionClick(elem.id)}>
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
