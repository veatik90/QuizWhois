import { FC, useState,useEffect } from "react";
import { CategoryProps } from "./interfaces";
import {ImageStyled} from "../../gallery/styles"
/** Категория */
export const Category: FC<CategoryProps> = ({ children, title, cards }) => {
  const [name, setName] = useState("hello");
  const [isDisabled, setIsDisabled] = useState(false);
  let [imgCards, setImgCards] = useState(cards)
  useEffect(() => {
    setImgCards(cards)
}, [cards])
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