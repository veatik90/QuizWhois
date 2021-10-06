export interface ImgCardProps {
  /** Интерфейс карточки */
  id: number
  name: string
  url: string
  date: Date
}

export interface ExitButtonStyledProps {
  /** Флаг - выключена ли возможность отправлять сообщение */
  isDisabled: boolean
}