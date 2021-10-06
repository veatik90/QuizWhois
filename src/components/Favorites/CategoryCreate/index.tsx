import React, {ChangeEvent, FC, useState} from "react";
import {InterfaceFormStyled, InputCategoryStyled, BtnCategoryCreateStyled} from "./styles";
import {CategoryCreateProps} from "./interfaces";

export const CategoryCreate: FC<CategoryCreateProps> = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [categoryName, setCategoryName] = useState("");

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        setCategoryName(event.target.value);

        if (event.target.value) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }

    const handleCreateCategory = () => {
        props.handleCreateCategory(categoryName);

        setCategoryName("");
        setIsDisabled(true);
    }

    return (
        <InterfaceFormStyled onSubmit={handleCreateCategory}>
            <InputCategoryStyled placeholder="Введите название категории" value={categoryName} onChange={handleChangeInput}/>
            <BtnCategoryCreateStyled disabled={isDisabled} onClick={handleCreateCategory}>Добавить</BtnCategoryCreateStyled>
        </InterfaceFormStyled>
    );
}