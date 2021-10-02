import React, { useState, useEffect } from 'react'
import { CategoryForm } from './favorites/CategoryForm'
import { CategoryList } from './favorites/CategoryList'
import { CategoryProps } from './favorites/Category/interfaces'
import { Gallery } from './gallery'

declare var confirm: (question: string) => boolean

export const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([])



  const addHandler = (title: string) => {
    const newCategory: CategoryProps = {
      title: title,
      id: Date.now(),
    cards: []    }
      setCategories(prev => [newCategory, ...prev])
  }

 

  const removeHandler = (id: number) => {
    const shoudRemove = confirm('Вы уверены, что хотите удалить категорию?')
    if (shoudRemove) {
      setCategories(prev => prev.filter(c => c.id !== id))
    }
  }

  return (<div>
    <React.Fragment>
      <CategoryForm onAdd={addHandler} />

      <CategoryList
        categories={categories}
        onRemove={removeHandler}
      />
    </React.Fragment>
<Gallery         categories={categories}
/>
    </div>
  )
}