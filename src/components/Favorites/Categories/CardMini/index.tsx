import React, {FC} from "react";
import {ImageStyled} from "./styles";
import {CardMiniProps} from "./interfaces";

export const CardMini: FC<CardMiniProps> = (props) => {
    return (
        <ImageStyled src={props.url} alt="" onClick={props.handleRemoveCardToCategory.bind(null, props.id)} />
    );
}