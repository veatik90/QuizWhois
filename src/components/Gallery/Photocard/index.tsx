import { FC, useState } from "react";
import { PhotocardStyled } from "./styles";
import deleteIcon from "./delete.svg";
import { IPhotocard } from "./interfaces";
import { Dropdown, Option } from "./Dropdown";

export const Photocard: FC<IPhotocard> = ({
  id,
  deleteFunc,
  categories,
  setCategories,
  pictures,
  addPictureToCategory,
}) => {
  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    setOptionValue(e.target.value);
  };

  const picture = (pictureId: string) => {
    let picture = pictures.find((picture) => picture.id === pictureId);
    if (!picture) {
      picture = {
        id: "-1",
        src: "picture does not exist",
        name: "picture does not exist",
        date: new Date(),
      };
    }
    return picture;
  };

  return (
    <PhotocardStyled>
      <div className="img-wrapper">
        <img src={picture(id).src} alt="galleryPicture" />
      </div>
      <div className="content-wrapper">
        <div className="button-wrapper">
          <Dropdown onChange={handleSelect}>
            <Option key={"first option"} value={"categories"} />
            {Array.from(categories).map((elem) => (
              <Option key={elem.id} value={elem.name} />
            ))}
          </Dropdown>
          <button
            className="add-to-category-button"
            disabled={categories.length === 0}
            onClick={() => {
              addPictureToCategory(optionValue, id);
              deleteFunc(id);
            }}
          >
            &#43;
          </button>
          <button className="delete-button" onClick={() => deleteFunc(id)}>
            <img src={deleteIcon} alt="t-can" />
          </button>
        </div>
        <p>
          name{" "}
          {picture(id).name !== "picture does not exist"
            ? picture(id).name
            : "picture does not exist"}
        </p>
        <p> date {picture(id).date.getFullYear()}</p>
      </div>
    </PhotocardStyled>
  );
};
