import { FC, useState } from "react";
import { CategoryProps } from "./interfaces";
import {ImageStyled} from "../../gallery/styles"
/** Для компонентов пишем комментарий - краткое описание */
export const Category: FC<CategoryProps> = ({ children, title, cards }) => {
  const [name, setName] = useState("hello");
  const [isDisabled, setIsDisabled] = useState(false);

  function handleClickButton() {
    setName("hi");
    setIsDisabled(true);
  }
  if (cards.length === 0) {
    return <p >{title} Добавьте rfhnjx</p>
  }
  return (
    <>{title}
   
{cards[0].url}

    </>
  );
};