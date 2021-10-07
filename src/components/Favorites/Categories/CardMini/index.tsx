import React, {FC} from "react";
import {ImageCardMiniStyled} from "./styles";
import {CardMiniProps} from "./interfaces";

export const CardMini: FC<CardMiniProps> = (props) => {
    return (
        <ImageCardMiniStyled src={props.url} alt="" onClick={props.handleRemoveCardToCategory.bind(null, props.id)} />
    );
}