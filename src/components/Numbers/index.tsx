import { FC } from "react";
import { Number } from "./Number";
import { NumdersWrapperStyled } from "./styles";

/** Для компонентов пишем комментарий - краткое описание */
export const Numbers: FC = () => {
  const numbers = [...Array.from(Array(10).keys())];

  return (
    <NumdersWrapperStyled>
      {/** https://reactjs.org/docs/lists-and-keys.html */}
      {/** https://reactjs.org/docs/components-and-props.html */}
      {numbers.map((number, index) => (
        <Number key={index} title="Numbers">
          {number}
        </Number>
      ))}
    </NumdersWrapperStyled>
  );
};
