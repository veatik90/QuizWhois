import React, {ChangeEvent, FC, useState} from "react";
import {CardProps} from "./interfaces";
import {ButtonStyled, CardStyled, InterfaceFormStyled, ImgStyled, NameStyled, DateStyled, DropDownSelectStyled, IconImageStyled} from "./styles";

export const Card: FC<CardProps> = (props) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [btnFavoritesIsDisabled, setBtnFavoritesIsDisabled] = useState<boolean> (true);

    const handlerChangeSelectCategory = (event: ChangeEvent<HTMLSelectElement>): void => {
        setSelectedCategory(event.target.value);

        if (event.target.value !== "Выберите категорию") {
            setBtnFavoritesIsDisabled(false);
        } else {
            setBtnFavoritesIsDisabled(true);
        }
    }

    return (
        <CardStyled>
            <ImgStyled src={props.dataFilm.url} alt={props.dataFilm.name}/>
            <div>
                <InterfaceFormStyled>
                    <DropDownSelectStyled onChange={handlerChangeSelectCategory}>
                        <option value="Выберите категорию">Выберите категорию</option>
                        {props.categories.map((category) => (
                            <option key={category.id} value={category.name}>{category.name}</option>
                        ))}
                    </DropDownSelectStyled>
                    <ButtonStyled
                        disabled={btnFavoritesIsDisabled}
                        type="submit"
                        onClick={props.handleAddCardToCategory.bind(this, selectedCategory, props.dataFilm)}
                    >
                        <IconImageStyled src="/images/favorites.png" alt="favorites-icon"/>
                    </ButtonStyled>
                    <ButtonStyled onClick={props.handleRemoveCard.bind(null, props.dataFilm.id)} type="submit" mr="0">
                        <IconImageStyled src="/images/remove.png" alt="remove-icon" />
                    </ButtonStyled>
                </InterfaceFormStyled>
                <NameStyled>{props.dataFilm.name}</NameStyled>
                <DateStyled>{props.dataFilm.date}</DateStyled>
            </div>
        </CardStyled>
    );
}
