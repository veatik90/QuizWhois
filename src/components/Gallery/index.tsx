import React, {FC} from "react";
import {Toggle} from "./Toggle";
import {GalleryStyled, SortingStyled, CardsStyled, CardNoneStyled} from "./styles";
import {GalleryProps} from "./interfaces";
import {Card} from "./Card";

export const Gallery: FC<GalleryProps> = (props) => {
    const renderCards = () => {
        if (props.cardsDisplay) {
            return props.cards.map((card) => (
                <Card
                    key={card.id}
                    dataFilm={card}
                    categories={props.categories}
                    handleRemoveCard={props.handleRemoveCard}
                    handleAddCardToCategory={props.handleAddCardToCategory}
                />
            ))
        } else {
            return <CardNoneStyled>Галерея пуста</CardNoneStyled>;
        }
    }

    return (
        <GalleryStyled>
            <SortingStyled>
                <Toggle onChangeSorting={props.handleChangeSorting} />
            </SortingStyled>
            <CardsStyled>
                {renderCards()}
            </CardsStyled>
        </GalleryStyled>
    );
}