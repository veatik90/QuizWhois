import { FC, useState } from "react"
import { CategoryProps } from "../../favorites/Category/interfaces"
import styled from 'styled-components'
import { ImgCard } from "./ImgCard"
import {Button} from "../../favorites/CategoryForm"
const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
  display: inline;
`
const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`

const DropDownListContainer = styled("div")``

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`
export interface ImgCardContainerProps {
  /** Контейнер карточки */
  categories: CategoryProps[]
  name: string
  url: string
  date: Date
  id: number
  onAddToCategory(categoryName: string, pictureId: number): void
}

export const ImgCardContainer: FC<ImgCardContainerProps> = ({  
  categories, onAddToCategory,  id, name, url, date }) => {

  const [isDisabled, setIsDisabled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  
  const onOptionClicked = value => () => {
    setSelectedOption(value)
    setIsOpen(false)
  }
  
  const toggling = () => setIsOpen(!isOpen)

  function handleClickButton() {
    setIsDisabled(true)
  }
  return (
    <> <ImgCard id={id} name={name} date={date } url={url}></ImgCard>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}> {selectedOption || "Категории"}</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {categories.map(c =>
                <ListItem onClick={onOptionClicked(c.title)} > {c.title}</ListItem>)}
            </DropDownList>
          </DropDownListContainer>
        )}   
        <Button onClick={() => onAddToCategory(selectedOption,id)}>Добавить в категорию</Button>
      </DropDownContainer>
     
    </>
  )
}