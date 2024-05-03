import React from "react";

import "./NavMenu.scss";

const NavMenu = ({
  content = "",
  navigateName = "",
  handleScrollToPage = () => {},
}) => {
  const handleClick = () => {
    handleScrollToPage(navigateName);
  };

  return (
    <button className="menu-text" onClick={handleClick}>
      {content}
    </button>
  );
};

export default NavMenu;
