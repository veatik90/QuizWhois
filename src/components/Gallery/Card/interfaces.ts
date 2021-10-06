import {CategoriesProps} from "../../Favorites/Categories/interfaces";
import {FilmsDataArrayInterfaces} from "../../../data/filmsDataArrayInterfaces";

export interface CardProps {
    dataFilm: {
        id: number,
        url: string,
        name: string,
        date: string
    },
    categories: CategoriesProps[],
    handleRemoveCard: (this: null, index: number) => void,
    handleAddCardToCategory: (selectedCategory: string, card: FilmsDataArrayInterfaces) => void,
}