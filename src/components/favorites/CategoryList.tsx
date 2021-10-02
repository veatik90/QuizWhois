import React from 'react'
import { CategoryProps } from './Category/interfaces'

type CategoryListProps = {
  categories: CategoryProps[]
  onRemove: (id: number) => void
}

export const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onRemove
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
             
              <span>{c.title}</span>
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