import { FC } from "react"
import { CategoryProps } from "./interfaces"
import {ImageStyled} from "../../gallery/styles"
import styled from 'styled-components'
import './style.css'
const H = styled.h4`
  text-align:center
`

/** Категория */
export const Category: FC<CategoryProps> = ({  title, cards }) => {
  if (cards.length === 0) {
    return  <><H>{title}</H>
      <div style={{
      margin: 15,

        border:'dashed',
        padding: 15,
      }}>
      </div></>
  }
  else return (<><H>{title}</H>
    <div id="master" style={{
      border:'inset',
      padding: 15,
      margin: 15,
    }}>
      {cards.map(element => <ImageStyled  key={element.id} src={element.url}/>)}
    </div></>
  )
}