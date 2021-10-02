import { CategoryProps } from './../../favorites/Category/interfaces';

export interface ImgCardProps {
    /** Для интерфейсов пишем комментарии. Название написал для примера */
    /** Текстовое наименование числа */
    title: string;
    categories: CategoryProps[]

  }

 
  export interface ExitButtonStyledProps {
    /** Флаг - выключена ли возможность отправлять сообщение */
    isDisabled: boolean;
  }