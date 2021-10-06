import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  body {
    background-color: #e7e7e7;
  }
`;

export const ContainerStyled = styled.div`
  margin: 30px auto;
  padding: 30px;
  width: 1140px;
  background-color: #fff;
  border-radius: 10px;
`;

export const RowStyled = styled.div`
  margin: 0 -15px;
  display: flex;
`;

export const ColLg6Styled = styled.div`
  padding: 0 15px;
  width: 50%;
`;