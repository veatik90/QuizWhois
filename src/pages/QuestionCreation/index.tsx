/* eslint-disable no-console */
import { Button, Grid, Stack, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { ISynonym, IQuestion } from './interfaces';
import {
  BoxWithBorderStyled,
  GridStyled,
  QuestionSpanStyled,
  QuestionsStackStyled,
  SavePackButtonStyled,
} from './styles';
// import { AnswerFieldStyled, AnswerStyled } from './styles';

export const QuestionCreation: FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [id, setId] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [answerSynonyms, setAnswerSynonyms] = useState<ISynonym[]>([{ id: 0, synonym: '' }]);
  const [isEdit, setIsEdit] = useState(false);

  const handleChangeQuestion = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const handleChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleChangeSynonym = (elemId: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const tmpAnswerSynonyms = [...answerSynonyms];
    const synonym = event.target.value;
    tmpAnswerSynonyms[elemId].synonym = synonym;
    setAnswerSynonyms(tmpAnswerSynonyms);
  };

  const handleEnterDown = (elemId: number, event: React.KeyboardEvent<HTMLInputElement | HTMLDivElement>) => {
    if (event.key === 'Enter') {
      const tmpAnswerSynonyms = answerSynonyms.filter((elem) => elem.synonym.length > 0);
      if (tmpAnswerSynonyms.length === answerSynonyms.length) {
        tmpAnswerSynonyms.push({ id: tmpAnswerSynonyms.length, synonym: '' });
      }
      if (tmpAnswerSynonyms.length === 0) tmpAnswerSynonyms.push({ id: tmpAnswerSynonyms.length, synonym: '' });
      setAnswerSynonyms(tmpAnswerSynonyms);
    }
  };

  const handleQuestionSave = (elemId: number) => {
    let tmpQuestions: IQuestion[] = [];
    if (questions) tmpQuestions = [...questions];
    if (question !== '' && answer !== '') {
      setAnswerSynonyms(answerSynonyms.filter((elem) => elem.synonym.length > 0)); // не успевает убрать пустые синонимы
      if (questions.filter((elem) => elem.id === elemId).length > 0) {
        tmpQuestions.map((elem, index) => {
          if (elem.id === elemId) {
            tmpQuestions[index] = { id, question, answer, answerSynonyms };
          }
          return elem;
        });
      } else tmpQuestions.push({ id: elemId, question, answer, answerSynonyms });
    }
    console.log(tmpQuestions);
    setQuestions(tmpQuestions);
    setAnswerSynonyms([{ id: 0, synonym: '' }]);
    setAnswer('');
    setQuestion('');
    setId(tmpQuestions.length);
    setIsEdit(false);
  };

  const handleQuestionDelete = (elemId: number) => {
    const tmpQuestions = questions.filter((elem) => elem.id !== elemId);
    setQuestions(tmpQuestions);
    setQuestions(tmpQuestions);
    setAnswerSynonyms([{ id: 0, synonym: '' }]);
    setAnswer('');
    setQuestion('');
    setId(elemId);
    setIsEdit(false);
  };

  const handleQuestionQlick = (elemId: number) => {
    const [tmpQuestion] = questions.filter((elem) => elem.id === elemId);
    console.log(tmpQuestion, elemId, questions);
    setId(tmpQuestion.id);
    setQuestion(tmpQuestion.question);
    setAnswer(tmpQuestion.answer);
    setAnswerSynonyms(tmpQuestion.answerSynonyms);
    setIsEdit(true);
  };

  const handleSavePack = () => {
    console.log('save pack');
  };

  return (
    <GridStyled className="QuestionCreationPageBlock" container spacing={2}>
      <Grid item xs={4}>
        <Stack spacing={2}>
          <TextField label="Введите вопрос" value={question} multiline rows={4} onChange={handleChangeQuestion} />
          <TextField label="Введите ответ(ы)" value={answer} onChange={handleChangeAnswer} />
          {answerSynonyms.map((elem) => (
            <TextField
              key={elem.id}
              label="Synonym"
              size="small"
              helperText="optional"
              value={elem.synonym}
              onChange={(e) => handleChangeSynonym(elem.id, e)}
              onKeyDown={(e) => handleEnterDown(elem.id, e)}
            />
          ))}
          <Stack direction="row" justifyContent={isEdit ? 'space-between' : 'flex-end'}>
            {isEdit ? (
              <Button variant="outlined" onClick={() => handleQuestionDelete(id)}>
                Удалить вопрос
              </Button>
            ) : null}
            <Button variant="contained" onClick={() => handleQuestionSave(id)}>
              Сохранить вопрос
            </Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={4} ml={10}>
        <BoxWithBorderStyled className="QuestionsBox">
          <QuestionsStackStyled position="static">
            {questions.map((elem, index) => (
              <QuestionSpanStyled key={elem.id} onClick={() => handleQuestionQlick(elem.id)}>
                <p className="questionP">{`${index + 1}) ${elem.question}`}</p>
              </QuestionSpanStyled>
            ))}
          </QuestionsStackStyled>
          <SavePackButtonStyled variant="contained" fullWidth onClick={handleSavePack}>
            Сохранить пакет
          </SavePackButtonStyled>
        </BoxWithBorderStyled>
      </Grid>
    </GridStyled>
  );
};
