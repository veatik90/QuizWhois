import { Category, Picture } from "../../iterfacecs";

export interface Card {
  id: string;
}
export interface IGallery {
  categories: Category[];
  setCategories: Function;
  pictures: Picture[];
  addPictureToCategory: Function;
}
