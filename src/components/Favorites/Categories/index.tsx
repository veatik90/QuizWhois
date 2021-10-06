import React, {FC} from "react";
import {CategoryStyled, CategoryTitleStyled, ImagesListStyled} from "./styles";
import {CardMini} from "./CardMini";
import {CategoriesProps} from "./interfaces";
import {ImageNone} from "./ImageNone";

export const Categories: FC<CategoriesProps> = (props) => {

    const renderImages = () => {
        if (props.cards[0]) {
            return props.cards.map((card) => (
                <CardMini
                    key={card.id}
                    id={card.id}
                    url={card.url}
                    handleRemoveCardToCategory={props.handleRemoveCardToCategory}
                />
            ));
        } else {
            return <ImageNone />;
        }
    }

    return (
        <CategoryStyled>
            <CategoryTitleStyled>{props.name}</CategoryTitleStyled>
            <ImagesListStyled>
                {renderImages()}
            </ImagesListStyled>
        </CategoryStyled>
    );
}