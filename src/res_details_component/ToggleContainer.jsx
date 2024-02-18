import React from "react";
import ToggleContainerItems from "./ToggleContainerItems";
import { useState } from "react";
import CategoryList from "./CategoryList";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

const ToggleContainer = ({ data }) => {
  const { title, categories, itemCards } = data;
  const [isOpen, setIsOpen] = useState(false);

  const itemsVisibility = {
    display: isOpen ? "block" : "none",
  };

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {title && (
        <div className="toggle-container">
          <div className="title" onClick={handleClick}>
            {title}
            <span>
              {isOpen ? (
                <BiSolidDownArrow className="arrowicon" />
              ) : (
                <BiSolidRightArrow className="arrowicon" />
              )}
            </span>
          </div>
          <div className="items" style={itemsVisibility}>
            {categories
              ? categories.map((category, index) => {
                  return <CategoryList data={category} key={index} />;
                })
              : itemCards &&
                itemCards.map((card, index) => {
                  return <ToggleContainerItems key={index} data={card.card} />;
                })}
          </div>
        </div>
      )}
    </>
  );
};

export default ToggleContainer;
