import { FC, useState } from "react";
import { CategoryProps } from "./interfaces";

/** Для компонентов пишем комментарий - краткое описание */
export const Category: FC<CategoryProps> = ({ children, title }) => {
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
  lll
    </>
  );
};