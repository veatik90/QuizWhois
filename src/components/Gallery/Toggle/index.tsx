import {ToggleStyled} from "./styles";
import {ToggleProps} from "./interfaces";
import {ChangeEvent, FC} from "react";

export const Toggle: FC<ToggleProps> = (props) => {
    const handlerChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        props.onChangeSorting(event.target.value);
    }

    return (
        <ToggleStyled onChange={handlerChange}>
            <option value="desc">Дата по убыванию</option>
            <option value="asc">Дата по возрастанию</option>
            <option> </option>
        </ToggleStyled>
    );
}