import { FC, useState } from "react";
import { NumberProps } from "./interfaces";
import { NumberStyled, ExitButtonStyled } from "./styles";

/** Для компонентов пишем комментарий - краткое описание */
export const Number: FC<NumberProps> = ({ children, title }) => {
  /** https://reactjs.org/docs/hooks-reference.html#usestate */
  const [name, setName] = useState("hello");
  const [isDisabled, setIsDisabled] = useState(false);

  /** https://reactjs.org/docs/handling-events.html */
  function handleClickButton() {
    setName("hi");
    setIsDisabled(true);
  }
  /** https://reactjs.org/docs/fragments.html */
  return (
    <>
      <ExitButtonStyled onClick={handleClickButton} isDisabled={isDisabled}>
        {title}
      </ExitButtonStyled>
      <p>{name}</p>
      <NumberStyled>{children}</NumberStyled>
    </>
  );
};
