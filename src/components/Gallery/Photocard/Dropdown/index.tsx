import { FC } from "react";
import { IDropdown, iOption } from "./interfaces";
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  // StyledLabel,
} from "./styles";

export const Dropdown: FC<IDropdown> = ({ children, onChange }) => {
  return (
    <DropdownWrapper onChange={onChange}>
      <StyledSelect id="services" name="services">
        {children}
      </StyledSelect>
    </DropdownWrapper>
  );
};

export const Option: FC<iOption> = ({ value }) => {
  return <StyledOption /*selected={props.selected}*/>{value}</StyledOption>;
};
