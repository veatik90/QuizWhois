import styled from "styled-components/macro";

export const InterfaceFormStyled = styled.form`
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
`;

export const InputCategoryStyled = styled.input`
    padding: 10px 10px;
    margin-right: 10px;
    border: 2px solid #fba6a6;
    outline: none;
    flex: 1;
`;

export const BtnCategoryCreateStyled = styled.button`
    padding: 10px 10px;
    border: 2px solid #fba6a6;
    cursor: pointer;
    outline: none;
    
    &[disabled] {
      cursor: not-allowed;
      border-color: #ffcbcb;
    }
`;