import React from "react";
import { PRODUCT_IMG_URL } from "../utils/constant";

function CategoryListItem({ data }) {
  const { id, name, description, defaultPrice, imageId, price } = data.info;
  return (
    <>
      <div className="toggle-item">
        <div className="info">
          <p className="name">{name}</p>
          <p className="price">
            {defaultPrice ? defaultPrice / 100 : price / 100}
          </p>
          <p className="description">{description}</p>
        </div>
        <div className="img">
          {imageId && <img src={PRODUCT_IMG_URL + imageId} alt="" />}
          <button>Add to Card</button>
        </div>
      </div>
    </>
  );
}

export default CategoryListItem;
