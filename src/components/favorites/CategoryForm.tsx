import React, { useRef } from 'react'
import styled from 'styled-components'

const Div = styled.div`
margin-top: 2rem;
`
interface CategoryFormProps {
  onAdd(title: string): void
}

export const CategoryForm: React.FC<CategoryFormProps> = props => {
  const ref = useRef<HTMLInputElement>(null)

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
    }
  }

  return (
    <Div >
       <label htmlFor="title" >
        Введите название категории
      </label>
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите название категории"
        onKeyPress={keyPressHandler}
      />
     
    </Div>
  )
}