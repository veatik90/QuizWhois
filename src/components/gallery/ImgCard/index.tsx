import { FC, useState } from "react";
import { ImgCardProps } from "./interfaces";
import { NumberStyled, ExitButtonStyled } from "./styles";
import styled from 'styled-components';

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

/** Для компонентов пишем комментарий - краткое описание */
export const ImgCard: FC<ImgCardProps> = ({ children, title, categories }) => {
  /** https://reactjs.org/docs/hooks-reference.html#usestate */
  const [name, setName] = useState("hello");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  /** https://reactjs.org/docs/handling-events.html */
  function handleClickButton() {
    setName("hi");
    setIsDisabled(true);
  }
  /** https://reactjs.org/docs/fragments.html */
  return (
    <>

      <DropDownContainer>
        <DropDownHeader onClick={toggling}>Mangoes</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {categories.map(c =>




                <ListItem> {c.title}</ListItem>)}

            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>

      <ExitButtonStyled onClick={handleClickButton} isDisabled={isDisabled}>
        {title}{name}
      </ExitButtonStyled>
      <p>{name}</p>
      <NumberStyled>{children}</NumberStyled>
    </>
  );
};