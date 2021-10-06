import React, {FC} from "react";
import {FavoritesStyled, CategoriesListStyled} from "./styles";
import {CategoryCreate} from "./CategoryCreate";
import {FavoritesProps} from "./interfaces";
import {CategoryNone} from "./CategoryNone";
import {Categories} from "./Categories";

export const Favorites: FC<FavoritesProps> = (props) => {

    const renderCategories = () => {
        if (props.categories[0]) {
            return props.categories.map((category) => (
                <Categories
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    cards={category.cards}
                    handleRemoveCardToCategory={props.handleRemoveCardToCategory}
                />
            ));
        } else {
            return <CategoryNone />
        }
    }

    return (
        <FavoritesStyled>
            <CategoryCreate
                categories={props.categories}
                handleCreateCategory={props.handleCreateCategory}
            />
            <CategoriesListStyled>
                {renderCategories()}
            </CategoriesListStyled>
        </FavoritesStyled>
    );
}