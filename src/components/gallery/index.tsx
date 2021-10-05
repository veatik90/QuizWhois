import { FC } from "react";
import { CategoryProps } from "../favorites/Category/interfaces";
import { ImgCard } from "./ImgCardContainer/ImgCard";
import { GalleryWrapperStyled, ImageStyled } from "./styles";
import { ImgCardContainer } from "./ImgCardContainer";
type GalleryProps = {
  onAddToCategory(categoryName: string, pictureId: number): void
  pictures
  categories: CategoryProps[]

}

/** Для компонентов пишем комментарий - краткое описание */
export const Gallery: React.FC<GalleryProps> = ({pictures,onAddToCategory,categories}) => {
 

  return (
    <GalleryWrapperStyled>
      {pictures.map(p => (
        <ImgCardContainer id={p.id} name={p.name} date={p.date } url={p.url} onAddToCategory={onAddToCategory} categories={categories}   >
       </ImgCardContainer>
      ))}
    </GalleryWrapperStyled>
  );
};