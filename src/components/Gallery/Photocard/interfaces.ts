import { Category, Picture } from "../../../iterfacecs";

export interface IPhotocard {
  id: string;
  deleteFunc: Function;
  categories: Category[];
  setCategories: Function;
  pictures: Picture[];
  addPictureToCategory: Function;
}
