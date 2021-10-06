import { useState } from "react";
import "./App.css";
import { Favorites } from "./components/Favorites";
import { Gallery } from "./components/Gallery";
import { PICTURES } from "./constants";
import { Category, Picture } from "./iterfacecs";

function App() {
  const [pictures, setPictures] = useState<Picture[]>(PICTURES);
  const [categories, setCategories] = useState<Category[]>([]);

  function handleCreateCategory(categoryName: string) {
    categories.forEach((elem) => {
      if (elem.name === categoryName) categoryName = "";
    });
    if (categoryName !== "") {
      const category: Category = {
        id: "" + new Date().getTime(),
        name: categoryName,
        pictures: [],
      };

      setCategories((categories) => [...categories, category]);
    }
  }

  function handleAddPictureToCategory(categoryName: string, pictureId: string) {
    const picture = pictures.find((picture) => picture.id === pictureId);

    let pos = undefined;

    if (picture) {
      pos = pictures.indexOf(picture);
      console.log(pos);
      pictures.splice(pos, 1);
      setPictures(pictures);
    }

    setCategories((categories) => {
      return categories.map((category) => {
        if (category.name !== categoryName) {
          return category;
        }
        if (
          picture &&
          !category.pictures.find((elem) => elem.id === pictureId)
        ) {
          category.pictures.push(picture);
        }

        return category;
      });
    });
  }

  return (
    <>
      <Gallery
        categories={categories}
        setCategories={setCategories}
        pictures={pictures}
        addPictureToCategory={handleAddPictureToCategory}
      />
      <Favorites
        categories={categories}
        setCategories={setCategories}
        pictures={pictures}
        createCategory={handleCreateCategory}
      />
    </>
  );
}

export default App;
