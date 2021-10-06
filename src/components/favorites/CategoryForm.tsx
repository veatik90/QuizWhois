import React, { useRef } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  size:1em;
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 1em;
  margin:1em;
  text-overflow: ellipsis

`
export const Button=styled.button`
display: inline-block;
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 1em;
border: 2px solid palevioletred;
border-radius: 3px;
display: inline;
size:1em;

`
interface CategoryFormProps {
  onAdd(title: string): void
}

export const CategoryForm: React.FC<CategoryFormProps> = props => {
  const ref = useRef<HTMLInputElement>(null)

  const keyPressHandler = () => {
   
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
   
  }

  return (
    <div >
      <form action="#">
        <Input
          ref={ref}
          type="text"
          id="title"
          placeholder="Введите название категории"
        />
        <Button onClick={()=>keyPressHandler()}>Создать категорию</Button>
      </form>
    </div>
  )
}