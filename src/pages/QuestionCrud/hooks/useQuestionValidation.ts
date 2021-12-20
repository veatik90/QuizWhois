import { useState } from 'react';
import { useFieldValidation } from '../../../shared/hooks/validation/hooks/useFieldValidation';
import { ValidationTypes } from '../../../shared/constants/validationConstants';
import { useFormValidation } from '../../../shared/hooks/validation/hooks/useFormValidation';
import { IQuestion } from '../interfaces';

export const useQuestionValidation = () => {
  const [isDisabledSubmitPack, setIsDisabledSubmitPack] = useState(true);

  const {
    errorDisplay: answersErrorDisplay,
    errorValidation: answersErrorValidation,
    helperText: answersHelperText,
    handleChange: handleValidationAnswersChange,
    validationSetEmptyValue: answersValidationSetEmptyValue,
    validationSetValue: answersValidationSetValue,
  } = useFieldValidation([ValidationTypes.REQUIRED]);
  const {
    errorDisplay: questionErrorDisplay,
    errorValidation: questionErrorValidation,
    helperText: questionHelperText,
    handleChange: handleValidationQuestionChange,
    validationSetEmptyValue: questionValidationSetEmptyValue,
    validationSetValue: questionValidationSetValue,
  } = useFieldValidation([ValidationTypes.REQUIRED]);

  const { isDisabledSubmit: isDisabledSubmitQuestion } = useFormValidation([
    answersErrorValidation,
    questionErrorValidation,
  ]);

  const handleValidationQuestionSave = () => {
    answersValidationSetEmptyValue();
    questionValidationSetEmptyValue();
  };

  const handleValidationQuestionClick = (questions: IQuestion[]) => {
    if (questions[0].question && questions[0].answers[0]) {
      questionValidationSetValue(questions[0].question);
      answersValidationSetValue(questions[0].answers[0]);
    }
  };

  const questionsValidator = (checkQuestions: IQuestion[]) => {
    if (checkQuestions.length === 0) {
      setIsDisabledSubmitPack(true);
    } else {
      setIsDisabledSubmitPack(false);
    }
  };

  return {
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
  };
};
