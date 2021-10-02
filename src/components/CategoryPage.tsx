import React, { useState, useEffect } from 'react'
import { CategoryForm } from './favorites/CategoryForm'
import { CategoryList } from './favorites/CategoryList'
import { CategoryProps } from './favorites/Category/interfaces'
import { Gallery } from './gallery'
import styled from 'styled-components';

declare var confirm: (question: string) => boolean



export const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([])



  const addHandler = (title: string) => {
    const newCategory: CategoryProps = {
      title: title,
      id: Date.now(),
      cards: []
    }
    setCategories(prev => [newCategory, ...prev])
  }



  const removeHandler = (id: number) => {
    const shoudRemove = confirm('Вы уверены, что хотите удалить категорию?')
    if (shoudRemove) {
      setCategories(prev => prev.filter(c => c.id !== id))
    }
  }
  const divStyle = {
    width: '100%',
    display: 'flex'

  };
  const div1Style = {
    display: 'inline-block',
    width: '50%',
    background:'DarkOliveGreen'
    

  };
  const div2Style = {
    display: 'inline-block',
    width: '50%',
    background: 'grey',
   

  };
  return (< div style={divStyle}>

    <div style={div2Style}><Gallery categories={categories}
    /></div>
        <div style={div1Style}>
      <CategoryForm onAdd={addHandler} />

      <CategoryList
        categories={categories}
        onRemove={removeHandler}
      />
    </div>
  </div>
  )
}