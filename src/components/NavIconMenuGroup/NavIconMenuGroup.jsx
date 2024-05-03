import React from "react";

import "./NavIconMenuGroup.scss";
import { menu_icon_data } from "../../utils/data/menu_icon_data";

const NavIconMenuGroup = () => {
  return (
    <div className="nav-icon-menu-container">
      {menu_icon_data.map((menuIcon, index) => {
        return (
          <div className="nav-icon-menu-group" key={index}>
            <img
              src={menuIcon.iconPath}
              alt={menuIcon.content + "icon"}
              className="nav-icon"
            />
            <p className="nav-icon-menu-content">{menuIcon.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NavIconMenuGroup;
