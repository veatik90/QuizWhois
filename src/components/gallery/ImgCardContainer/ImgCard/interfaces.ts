import { CategoryProps } from '../../../favorites/Category/interfaces';

export interface ImgCardProps {
    /** Для интерфейсов пишем комментарии. Название написал для примера */
    /** Текстовое наименование числа */
  
    id: number;
    name: string
    url: string;
    date: Date;
  }

 
  export interface ExitButtonStyledProps {
    /** Флаг - выключена ли возможность отправлять сообщение */
    isDisabled: boolean;
  }