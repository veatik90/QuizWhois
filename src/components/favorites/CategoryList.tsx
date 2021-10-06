import React from 'react'
import { Category } from './Category'
import { CategoryProps } from './Category/interfaces'
import styled from 'styled-components'
import {Delete} from '@styled-icons/fluentui-system-filled'
const H = styled.h4`
text-align:center
`
type CategoryListProps = {
  categories: CategoryProps[]
  onRemove: (id: number) => void
  onCreateCategory(title: string): void
}
const DivStyled = styled.div`
width: 100%;
display: flex
`
const Div1Styled = styled.div`
display: inline-block;
width: 50%
`
const DeleteButton = styled(Delete)`
  width:30px
`
export const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onRemove,
}) => {
  if (categories.length === 0) {
    return <H>Добавьте первую категорию</H>
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  return (
    <ul>
      {categories.map(c => {
        return (
            <DivStyled 
              
              key={c.id}
            >
              <Div1Styled>
                <Category  id={c.id} title={c.title} cards={c.cards}/>
              </Div1Styled>
              <Div1Styled>
                <DeleteButton
                  onClick={event => removeHandler(event, c.id)}
                />
              </Div1Styled>
            </DivStyled>
        )
      })}
    </ul>
  )
}