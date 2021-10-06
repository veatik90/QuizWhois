import { FormEventHandler } from "react";

export interface IDropdown {
  onChange: FormEventHandler<HTMLFormElement>;
}
export interface iOption {
  value: string;
}
