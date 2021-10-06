import {CategoriesProps} from "../Favorites/Categories/interfaces";
import {FilmsDataArrayInterfaces} from "../../data/filmsDataArrayInterfaces";

export interface GalleryProps {
    cards: FilmsDataArrayInterfaces[],
    cardsDisplay: boolean,
    categories: CategoriesProps[],
    handleChangeSorting: (orderBy: string) => void,
    handleRemoveCard: (id: number) => void,
    handleAddCardToCategory: (selectedCategory: string, card: FilmsDataArrayInterfaces) => void,
}