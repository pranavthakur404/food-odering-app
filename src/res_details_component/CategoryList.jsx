import React, { useState } from "react";
import CategoryListItem from "./CategoryListItem";

function CategoryList({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, itemCards } = data;

  const itemVisibility = {
    display: isOpen ? "block" : "none",
  };

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="category-container">
      <div className="title" onClick={handleClick}>
        {title}
      </div>
      <div className="items" style={itemVisibility}>
        {itemCards &&
          itemCards.map((card, index) => {
            return <CategoryListItem key={index} data={card.card} />;
          })}
      </div>
    </div>
  );
}

export default CategoryList;
