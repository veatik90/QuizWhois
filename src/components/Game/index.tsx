import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Box, Container, Typography, TextField } from '@mui/material';
import { withTabs } from '../../hoc/withTabs';
import { getPackById } from '../../pages/GameCatalog/constants';

export const Game: FC = () => {
  const [count, setCount] = useState(1);
  const [numOfCorrectAns, setNumOfCorrectAns] = useState(0);

  const { id } = useParams<{ id?: string }>();
  const pack = getPackById(Number(id));
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (pack.questions[count - 1].answers.find((correctAnswer) => correctAnswer === formData.get('answer'))) {
      alert('верно');
      setNumOfCorrectAns(numOfCorrectAns + 1);
    } else {
      alert('неверно!');
    }
    if (count + 1 <= pack.questions[count - 1].answers.length) {
      setCount(count + 1);
    } else {
      alert(`правильных ${numOfCorrectAns}из${pack.questions.length}`);
    }
  };
  return (
    <Container component="main" maxWidth="lg">
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
