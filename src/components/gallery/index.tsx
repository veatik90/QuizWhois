import { CategoryProps } from "../favorites/Category/interfaces"
import { GalleryWrapperStyled } from "./styles"
import { ImgCardContainer } from "./ImgCardContainer"
type GalleryProps = {
  onAddToCategory(categoryName: string, pictureId: number): void
  pictures
  categories: CategoryProps[]
}

/** Галерея */
export const Gallery: React.FC<GalleryProps> = ({pictures,onAddToCategory,categories}) => {
  return (
    <GalleryWrapperStyled>
      {pictures.map(p => (
        <ImgCardContainer 
          id={p.id} 
          name={p.name} 
          date={p.date } 
          url={p.url} 
          onAddToCategory={onAddToCategory} 
          categories={categories}
        />
      ))}
    </GalleryWrapperStyled>
  )
}