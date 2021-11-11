import { Button, Grid, Stack, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { ISynonym, IQuestion } from './interfaces';
// import { AnswerFieldStyled, AnswerStyled } from './styles';

export const QuestionCreation: FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [answerSynonyms, setAnswerSynonyms] = useState<ISynonym[]>([{ id: 0, synonym: '' }]);

  const handleChangeQuestion = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const handleChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleChangeSynonym = (id: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const tmpAnswerSynonyms = [...answerSynonyms];
    const synonym = event.target.value;
    tmpAnswerSynonyms[id].synonym = synonym;
    setAnswerSynonyms(tmpAnswerSynonyms);
  };

  const handleEnterDown = (id: number, event: React.KeyboardEvent<HTMLInputElement | HTMLDivElement>) => {
    if (event.key === 'Enter') {
      const tmpAnswerSynonyms = answerSynonyms.filter((elem) => elem.synonym.length > 0);
      if (tmpAnswerSynonyms.length === answerSynonyms.length) {
        tmpAnswerSynonyms.push({ id: tmpAnswerSynonyms.length, synonym: '' });
      }
      if (tmpAnswerSynonyms.length === 0) tmpAnswerSynonyms.push({ id: tmpAnswerSynonyms.length, synonym: '' });
      setAnswerSynonyms(tmpAnswerSynonyms);
    }
  };

  const handleQuestionSave = () => {
    let tmpQuestions: IQuestion[] = [];
    if (questions) tmpQuestions = [...questions];
    if (question !== '' && answer !== '') {
      setAnswerSynonyms(answerSynonyms.filter((elem) => elem.synonym.length > 0)); // не успевает убрать пустые синонимы
      tmpQuestions.push({ id: tmpQuestions.length, question, answer, answerSynonyms });
    }
    setQuestions(tmpQuestions);
    setAnswerSynonyms([{ id: 0, synonym: '' }]);
    setAnswer('');
    setQuestion('');
    // console.log(questions);
  };

  return (
    <Grid container spacing={2} mt={0} px={6} justifyContent="space-between">
      <Grid item xs={5}>
        <Stack spacing={2}>
          <TextField label="Question" value={question} multiline rows={4} onChange={handleChangeQuestion} />
          {/* <AnswerFieldStyled>
            <AnswerStyled>
              <p>answer</p>
            </AnswerStyled>
          </AnswerFieldStyled> */}
          <TextField label="Answer" value={answer} onChange={handleChangeAnswer} />
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
          <Button onClick={handleQuestionSave}>Save question</Button>
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <Button>button</Button>
      </Grid>
    </Grid>
  );
};
