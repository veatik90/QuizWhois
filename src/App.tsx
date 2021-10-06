import React, {useState} from 'react';
import {Gallery} from "./components/Gallery";
import {GlobalStyled, ContainerStyled, RowStyled, ColLg6Styled} from "./AppStyled";
import {CategoriesProps} from "./components/Favorites/Categories/interfaces";
import {filmsDataArray} from "./data/filmsDataArray";
import {FilmsDataArrayInterfaces} from "./data/filmsDataArrayInterfaces";
import {SortClass} from "./helpers/Sort";
import {deleteCardById} from "./components/Gallery/Card/helpers";
import {Favorites} from "./components/Favorites";

function App() {
    const [sortBy, setSortBy] = useState<string|null> ("desc");
    const [cardsDisplay, setCardsDisplay] = useState<boolean> (true);
    const [cards, setCards] = useState<FilmsDataArrayInterfaces[]> (filmsDataArray);
    const [categories, setCategories] = useState<CategoriesProps[]> ([]);

    const sorting = (cardsNeedSort: FilmsDataArrayInterfaces[], orderBy?: string|null) => {
        let cardsSorted: FilmsDataArrayInterfaces[] = [];

        if (orderBy === undefined) {
            orderBy = sortBy;
        }

        if (orderBy && cards[0]) {
            let Sort = SortClass();

            if (cards[1]) {
                if (orderBy === "asc") {
                    cardsSorted = Object.assign([], Sort.byAsc(cardsNeedSort));
                } else if (orderBy === "desc") {
                    cardsSorted = Object.assign([], Sort.byDesc(cardsNeedSort));
                }
                setCards(cardsSorted);
            }
            setCardsDisplay(true);
        } else {
            setCardsDisplay(false);
        }
    }

    const handleChangeSorting = (orderBy: string): void => {
        setSortBy(orderBy);
        sorting(cards, orderBy);
    }

    const handleRemoveCard = (id: number): void => {
        if (cards[0]) {
            let cardsActual: FilmsDataArrayInterfaces[] = Object.assign([], deleteCardById(cards, id));
            setCards(cardsActual);
        }
        if (!cards[0]) {
            setCardsDisplay(false);
        }
    }

    const handleCreateCategory = (categoryName: string): void => {
        const category = {
            id: new Date().getTime(),
            name: categoryName,
            cards: [],
            handleRemoveCardToCategory: handleRemoveCardToCategory,
        }

        let uniqueName: boolean = true;
        categories.forEach((category) => {
            if (category.name === categoryName) {
                uniqueName = false;
            }
        });

        if (uniqueName) {
            let categoriesActual = Object.assign([], categories);
            categoriesActual.push(category);
            setCategories(categoriesActual);
        }
    }

    const handleAddCardToCategory = (selectedCategory: string, card: FilmsDataArrayInterfaces) => {
        categories.forEach((category, index) => {
            if (category.name === selectedCategory) {
                let categoriesActual: CategoriesProps[] = Object.assign([], categories),
                    cardsActual: FilmsDataArrayInterfaces[] = Object.assign([], deleteCardById(cards, card.id));

                categoriesActual[index].cards.push(card);

                setCategories(categoriesActual);
                setCards(cardsActual);
            }
        });

        if (!cards[0]) {
            setCardsDisplay(false);
        }
    }

    const handleRemoveCardToCategory = (id: number) => {
        categories.forEach((category) => {
            category.cards.forEach((card, index) => {
                if (card.id === id) {
                    let cardsActual = Object.assign([], cards);
                    cardsActual.unshift(card);
                    setCards(cardsActual);
                    sorting(cardsActual);
                    setCardsDisplay(true);

                    category.cards.splice(index, 1);
                }
            });
        });
    }

    return (
        <>
            <GlobalStyled />
            <ContainerStyled>
                <RowStyled>
                    <ColLg6Styled>
                        <Gallery
                            cards={cards}
                            cardsDisplay={cardsDisplay}
                            categories={categories}
                            handleChangeSorting={handleChangeSorting}
                            handleRemoveCard={handleRemoveCard}
                            handleAddCardToCategory={handleAddCardToCategory}
                        />
                    </ColLg6Styled>
                    <ColLg6Styled>
                        <Favorites
                            categories={categories}
                            handleCreateCategory={handleCreateCategory}
                            handleRemoveCardToCategory={handleRemoveCardToCategory}
                        />
                    </ColLg6Styled>
                </RowStyled>
            </ContainerStyled>
        </>
    );
}

export default App;
