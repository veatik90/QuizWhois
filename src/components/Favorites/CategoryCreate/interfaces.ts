import {FilmsDataArrayInterfaces} from "../../../data/filmsDataArrayInterfaces";

export interface CategoryCreateProps {
    categories: Array<{id: number, name: string, cards: FilmsDataArrayInterfaces[]}>,
    handleCreateCategory: (categoryName: string) => void,
}