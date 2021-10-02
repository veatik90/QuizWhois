import styled from "styled-components";
import { ExitButtonStyledProps } from "./interfaces";

/** Название заканчиваем на Styled */
export const NumberStyled = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
  border-radius: 10px;
`;

const ButtonStyled = styled.button`
  margin-left: 5px;
`;

/** Наследование https://styled-components.com/docs/basics#extending-styles */
const CloseButtonStyled = styled(ButtonStyled)`
  color: red;
`
export const ExitButtonStyled = styled(
    CloseButtonStyled
  )<ExitButtonStyledProps>`
    color: ${(props) => (props.isDisabled ? "blue" : "red")};
  `;