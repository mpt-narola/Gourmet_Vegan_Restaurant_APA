import React, { useState } from "react";

import logo from "../../assets/images/logo/Logo 2-1.svg";

import "./Navbar.scss";
import NavMenuGroup from "./NavMenuGroup/NavMenuGroup";
import NavIconMenuGroup from "../NavIconMenuGroup/NavIconMenuGroup";

import hamburger from "../../assets/images/vectors/hamburger.svg";

const Navbar = ({ handleScrollToPage }) => {
  const [collapse, setShowCollapse] = useState(false);

  const handleCollapse = () => {
    setShowCollapse((current) => !current);
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="logo" className="log-img " />
      </div>
      <NavMenuGroup
        isCollapse={collapse}
        handleCollapse={handleCollapse}
        handleScrollToPage={handleScrollToPage}
      />

      <div className="nav-icon-menu">
        <NavIconMenuGroup />
      </div>

      <div className="hamburger-icon-div" onClick={handleCollapse}>
        <img src={hamburger} alt="hamburger_icon" />
      </div>
    </div>
  );
};

export default Navbar;
