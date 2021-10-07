import styled from "styled-components/macro";

export const CardStyled = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const ImgStyled = styled.img`
  object-fit: cover;
  height: 104px;
  width: 152px;
  margin-right: 15px;
  border-radius: 5px;
`;

export const InterfaceFormStyled = styled.div`
  display: flex;
`;

export const DropDownSelectStyled = styled.select`
  margin-right: 10px;
  padding: 10px 10px;
  border: 2px solid #fba6a6;
  background-color: #fff;
  cursor:pointer;
  outline: none;
  width: 200px;
`;

export const ButtonStyled = styled.button<{type: string, mr?: string}>`
  padding: 5px 10px;
  margin-right: ${(props) => (props.mr ? props.mr : "10px")};
  border: 2px solid #fba6a6;
  background-color: #fff;
  cursor: pointer;
  outline: none;
  
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const NameStyled = styled.div`
  margin-top: 10px;
  text-align: right;
  font-size: 20px;
`;

export const DateStyled = styled.div`
  margin-top: 5px;
  text-align: right;
`;

export const IconImageStyled = styled.img`
  width: 24px;
`;
