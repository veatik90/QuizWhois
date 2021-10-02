import { FC } from "react";
import { CategoryProps } from "../favorites/Category/interfaces";
import { ImgCard } from "./ImgCard";
import { GalleryWrapperStyled, ImageStyled } from "./styles";
type GalleryProps = {
  categories: CategoryProps[]

}

/** Для компонентов пишем комментарий - краткое описание */
export const Gallery: React.FC<GalleryProps> = ({categories}) => {
  const pictures = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAB6XaAsws_EyZHQ3yyRKUb2DACe_9oNvccQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21-7JdHb3v2X0MO_5UPs1b_dgrvaOo6liqg&usqp=CAU",
    "http://фриляндия.рф/wp-content/uploads/2019/12/44b27eefe19e6bc71548efdf3ee1a3ad.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGC--3nZJh75vDSJyZAWDDgIvl-46VjK6rBg&usqp=CAU",
    "https://proza.ru/pics/2019/02/05/56.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNumxh-Anwb_ogEHfgUa-PrdTQvxm1dq7cdQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBdMzXYwVm_UYWWhU6KmKdudQskpMOK2rLQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Mq1ljRPHiI_9L-fV5Nq48TKyLPX_6QIQ6Q&usqp=CAU",
    "https://basik.ru/images/nature_landscape_9/short.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRapgjzJbsysvGw12tCmQFvHRibeCyftp_PQQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxZqfOto6yFqoPS1_NiS7lffYB0YAmBqhkw&usqp=CAU",

  ];

  return (
    <GalleryWrapperStyled>
      {pictures.map(p => (
        <ImgCard categories={categories} title="Numbers">
        <ImageStyled src={p}>
        </ImageStyled></ImgCard>
      ))}
    </GalleryWrapperStyled>
  );
};