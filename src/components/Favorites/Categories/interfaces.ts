import {FilmsDataArrayInterfaces} from "../../../data/filmsDataArrayInterfaces";

export interface CategoriesProps {
    id: number,
    name: string,
    cards: FilmsDataArrayInterfaces[],
    handleRemoveCardToCategory: (id: number) => void,
}