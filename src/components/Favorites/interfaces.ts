import {FilmsDataArrayInterfaces} from "../../data/filmsDataArrayInterfaces";

export interface FavoritesProps {
    categories: Array<{id: number, name: string, cards: FilmsDataArrayInterfaces[]}>,
    handleCreateCategory: (categoryName: string) => void,
    handleRemoveCardToCategory: (id: number) => void,
}