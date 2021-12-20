import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect } from 'react';
import { withTabs } from '../../hoc/withTabs';
import { HEADER_HEIGHT, TABS_HEIGHT } from '../../shared/constants';
import { AddQuestion } from '../QuestionCreation/components/AddQuestion';
import { QuestionsList } from '../QuestionCreation/components/QuestionsList';
import { useQuestionCRUD } from './components/hooks/useQuestionCRUD';
import { useQuestionValidation } from './components/hooks/useQuestionValidation';
import { GridStyled } from './styles';

export const QuestionCrud: FC = () => {
  const isLoading = false;
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
    // console.log('save pack');
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

  return isLoading ? (
    <Box
      sx={{
        height: `calc(100vh - ${HEADER_HEIGHT + TABS_HEIGHT}px)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <GridStyled className="QuestionCreationPageBlock" container spacing={2}>
      <AddQuestion
        questions={questions}
        question={question}
        answers={answers}
        answer={answer}
        allHandleQuestionChange={allHandleQuestionChange}
        allHandleQuestionDelete={allHandleQuestionDelete}
        allHandleQuestionSave={allHandleQuestionSave}
        questionErrorDisplay={questionErrorDisplay}
        questionHelperText={questionHelperText}
        handleChangeAnswers={handleChangeAnswers}
        answersErrorDisplay={answersErrorDisplay}
        answersHelperText={answersHelperText}
        allHandleAnswerChange={allHandleAnswerChange}
        handleAnswerBlur={handleAnswerBlur}
        handleSavePack={handleSavePack}
        isEdit={isEdit}
        isDisabledSubmitQuestion={isDisabledSubmitQuestion}
        isDisabledSubmitPack={isDisabledSubmitPack}
      />
      <QuestionsList
        questions={questions}
        allHandleQuestionClick={allHandleQuestionClick}
        handleSavePack={handleSavePack}
      />
    </GridStyled>
  );
};

export const QuestionCrudPage = withTabs(QuestionCrud);
