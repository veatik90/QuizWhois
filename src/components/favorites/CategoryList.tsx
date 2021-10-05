import React, { Children } from 'react'
import { Category } from './Category'
import { CategoryProps } from './Category/interfaces'

type CategoryListProps = {
  categories: CategoryProps[]
  onRemove: (id: number) => void
  onCreateCategory(title: string): void
}

export const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onRemove,children
}) => {
  if (categories.length === 0) {
    return <p >Добавьте первую категорию</p>
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
   // event.preventDefault()
    onRemove(id)
  }

  return (
    <ul>
      {categories.map(c => {
        
       

        return (
          <li  key={c.id}>
            <label>
             <Category id={c.id} title={c.title} cards={c.cards}></Category>
             
              <i
                onClick={event => removeHandler(event, c.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}