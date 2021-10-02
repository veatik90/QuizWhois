import { ImgCardProps } from '../../gallery/ImgCard/interfaces';
import { ImgCard } from '../../gallery/ImgCard/index';
export interface CategoryProps {
    title: string
    id: number
    cards:ImgCardProps[]
  }