import React from "react";
import { FC, useState } from "react";
import { Category } from "./Category/";
import { IFavorites } from "./interfacecs";
import { StyledFavorites } from "./styles";

export const Favorites: FC<IFavorites> = ({
  categories,
  setCategories,
  pictures,
  createCategory,
}) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    //e: React.FormEvent<HTMLInputElement> : React.ChangeEvent<HTMLInputElement>
    e.preventDefault();
    createCategory(userInput);
  };

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  return (
    <StyledFavorites>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="enter category"
        />
        <button disabled={userInput.length === 0}>add</button>
      </form>
      {categories.length === 0 ? (
        <p>add category</p>
      ) : (
        categories.map((elem, index) => (
          <Category
            key={categories[index].id}
            name={elem.name}
            categoryPictures={elem.pictures}
          />
        ))
      )}
    </StyledFavorites>
  );
};
