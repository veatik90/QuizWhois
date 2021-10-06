import { Category, Picture } from "../../iterfacecs";

export interface IFavorites {
  categories: Category[];
  setCategories: Function;
  pictures: Picture[];
  createCategory: Function;
}
