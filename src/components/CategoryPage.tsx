import React, { useState, useEffect } from 'react'
import { CategoryForm } from './favorites/CategoryForm'
import { CategoryList } from './favorites/CategoryList'
import { CategoryProps } from './favorites/Category/interfaces'
import { Gallery } from './gallery'
import { ImgCardProps } from './gallery/ImgCardContainer/ImgCard/interfaces'
import { PICTURES } from './constants';

declare var confirm: (question: string) => boolean

export const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([])
  const [pictures, setPictures] = useState<ImgCardProps[]>(PICTURES);


  function handleCreateCategory(title: string) {
    const category: CategoryProps = {
      title: title,
      id: Date.now(),
      cards: []
    };

    setCategories((categories) => [...categories, category]);
  }

  function handleAddPictureToCategory(categoryName: string, pictureId: number) {
    const picture = pictures.find((picture) => picture.id === pictureId);
    setPictures((pictures) => pictures.filter((picture) => picture.id !== pictureId));

    setCategories((categories) => {
       return categories.map((category) => {
        if (category.title !== categoryName) {
          return category;
        }
        if (picture) {
          category.cards.push(picture)
        }

        return category;
      });
    });
  }

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

    <div style={div2Style}><Gallery pictures={pictures} categories={categories} onAddToCategory={handleAddPictureToCategory}
    /></div>
        <div style={div1Style}>
      <CategoryForm onAdd={addHandler} />

      <CategoryList
     categories={categories} onCreateCategory={handleCreateCategory}
     onRemove={removeHandler}      />
    </div>
  </div>
  )
}