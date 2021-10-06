import styled from "styled-components";

export const PhotocardStyled = styled.div`
  height: 150px;
  width: 900px;
  margin: 20px 20px 0px 20px;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  border: 1px solid gray;

  div {
    display: flex;
    height: 150px;
    width: 400px;
  }

  button {
    width: 30px;
    height: 30px;
    align-self: flex-start;
    margin-right: 20px;
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
  }

  .dropdown {
    width: 90px;
    background-color: white;
  }

  .content-wrapper {
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
  }

  .button-wrapper {
    justify-content: left;
  }

  .delete-button {
    background-color: white;
    padding-left: 2px;
    & > img {
      width: 23px;
      color: gray;
    }
  }

  .add-to-category-button {
    background-color: white;
    font-size: 25px;
    padding-bottom: 0px;
  }
`;
