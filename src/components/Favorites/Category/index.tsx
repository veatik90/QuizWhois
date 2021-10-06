import { FC } from "react";
import { StyledCategory } from "./styles";
import { ICategory } from "./interfacecs";
import { EmptyState } from "./EmptyState";

export const Category: FC<ICategory> = ({ name, categoryPictures }) => {
  let pictures;
  if (categoryPictures.length === 0) pictures = <EmptyState />;
  else
    pictures = categoryPictures.map((elem) => (
      <img key={elem.id} src={elem.src} alt="favPicture" />
    ));
  return (
    <StyledCategory>
      <div>
        <p>{name}</p>
        {pictures}
      </div>
    </StyledCategory>
  );
};
