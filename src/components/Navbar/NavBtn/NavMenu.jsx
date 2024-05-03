import React from "react";

import "./NavMenu.scss";

const NavMenu = ({ content = "" }) => {
  return <button className="menu-text">{content}</button>;
};

export default NavMenu;
