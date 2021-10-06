import {FilmsDataArrayInterfaces} from "../../../data/filmsDataArrayInterfaces";

export const deleteCardById = (cards: FilmsDataArrayInterfaces[], id: number): FilmsDataArrayInterfaces[] => {
    cards.forEach((card, index) => {
        if (card.id === id) {
            cards.splice(index, 1);
        }
    });

    return cards;
}