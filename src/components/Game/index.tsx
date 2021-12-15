/* eslint-disable react/jsx-one-expression-per-line */
import { FC, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Box, Container, Typography, TextField } from '@mui/material';
import { withTabs } from '../../hoc/withTabs';
import { getPackById } from '../../pages/GameCatalog/constants';
import { ToastContext } from '../../contexts/ToastContext';

export const Game: FC = () => {
  const [end, setEnd] = useState(false);
  const [count, setCount] = useState(1);
  const [numOfCorrectAns, setNumOfCorrectAns] = useState(0);
  const { showMessage } = useContext(ToastContext);
  const { id } = useParams<{ id?: string }>();
  const pack = getPackById(Number(id));
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (pack.questions[count - 1].answers.find((correctAnswer) => correctAnswer === formData.get('answer'))) {
      showMessage('Правильный ответ!', 'success');
      setNumOfCorrectAns(numOfCorrectAns + 1);
    } else {
      showMessage('Ответ неверный', 'error');
    }
    if (count + 1 <= pack.questions[count - 1].answers.length) {
      setCount(count + 1);
    } else {
      setEnd(true);
    }
  };
  if (end) {
    return (
      <Container component="main" maxWidth="md">
        <Typography variant="h4" align="center" color="primary" gutterBottom sx={{ marginTop: 8 }}>
          Правильных ответов&nbsp;
          {numOfCorrectAns}&nbsp;из&nbsp;
          {pack.questions.length}.&nbsp;
          <br />
          Благодарим за игру! Приходите снова :)
        </Typography>
      </Container>
    );
  }
  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h4" align="center" color="primary" gutterBottom sx={{ marginTop: 1 }}>
        {pack.name}
      </Typography>
      <Typography variant="body2" align="center" gutterBottom sx={{ marginTop: 1 }}>
        {count}
        &nbsp; вопрос из &nbsp;
        {pack.questions.length}
      </Typography>
      Вопрос: &nbsp;
      {pack.questions[count - 1].question}
      <Box
        sx={{
          marginBottom: '10px',
        }}
        component="form"
        onSubmit={handleSubmit}
        noValidate
      >
        <TextField margin="normal" required fullWidth id="answer" name="answer" label="Ответ" multiline />
        <Button variant="contained" type="submit">
          Ответить
        </Button>
      </Box>
    </Container>
  );
};

export const GamePage = withTabs(Game);
