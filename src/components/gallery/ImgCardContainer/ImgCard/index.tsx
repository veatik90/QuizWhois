import { FC } from "react"
import { ImgCardProps } from "./interfaces"
import { ImageStyled } from "../../styles"

/** Карточка */
export const ImgCard: FC<ImgCardProps> = ({  url, date, name, id }) => {
  return (
    <> <ImageStyled key={id} src={url}/></>
  )
}