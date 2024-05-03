import React, { useState } from "react";
import "./MenuTab.scss";
import { food_menu_data } from "../../utils/data/food_menu_data";
const MenuTab = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="manu-tab-container">
      {food_menu_data.map((menu, index, arr) => (
        <div
          className={`food-menu ${index === activeTabIndex ? "active" : ""}
        ${index !== arr.length - 1 ? "border-right" : ""}
        `}
          key={index}
          onClick={() => handleTabClick(index)}>
          <p className="food-menu-text">{menu}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuTab;
