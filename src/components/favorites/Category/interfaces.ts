import { ImgCardProps } from '../../gallery/ImgCardContainer/ImgCard/interfaces';
import { ImgCard } from '../../gallery/ImgCardContainer/ImgCard/index';
export interface CategoryProps {
    title: string
    id: number
    cards:ImgCardProps[]
  }