/** Интерфейс пакета */
export interface Pack {
  /** id пакета */
  id: number;
  /** Название  */
  name: string;
  /** Описание  */
  description: string;
  /** завершенный/незавершенный */
  isDraft: boolean;
}
