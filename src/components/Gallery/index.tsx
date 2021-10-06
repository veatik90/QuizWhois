import { FC, useState } from "react";
import { Photocard } from "./Photocard/index";
import { StyledGallery } from "./styles";
import { Card } from "./interfaces";
import { EmptyState } from "./EmptyState";
import { IGallery } from "./interfaces";

export const Gallery: FC<IGallery> = ({
  categories,
  setCategories,
  pictures,
  addPictureToCategory,
}) => {
  // const defaultNumbers = [...Array.from(Array(10).keys())].map((num) => {
  //   return {
  //     id: num + 1,
  //   };
  // });
  const defaultNumbers = pictures.map((elem) => {
    return { id: elem.id };
  });

  const [numbers, setNumbers] = useState<Card[]>(defaultNumbers);

  const deletePicture = (id: string) => {
    const newList = numbers.filter((elem) => elem.id !== id);
    setNumbers(() => newList);
  };
  if (numbers.length === 0) return <EmptyState />;
  return (
    <StyledGallery>
      {numbers.map((num) => (
        <Photocard
          key={num.id}
          id={num.id}
          deleteFunc={deletePicture}
          categories={categories}
          setCategories={setCategories}
          pictures={pictures}
          addPictureToCategory={addPictureToCategory}
        ></Photocard>
      ))}
    </StyledGallery>
  );
};
