import React, { useEffect, useRef, useState } from "react";

import "./NavMenuGroup.scss";
import NavMenu from "../NavBtn/NavMenu";
import { menus_data } from "../../../utils/data/menus_data";
import closeIcon from "../../../assets/images/vectors/close.svg";

const NavMenuGroup = ({
  isCollapse = false,
  handleCollapse = () => {},
  handleScrollToPage = () => {},
}) => {
  const divRef = useRef(null);

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (!isCollapse) return;
    function handleClickOutside(event) {
      if (divRef?.current && !divRef?.current?.contains(event.target)) {
        handleCollapse();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [divRef, isCollapse]);

  useEffect(() => {
    if (windowSize > 992) {
      if (isCollapse) {
        handleCollapse();
      }
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [windowSize]);

  return (
    (!mobile || isCollapse) && (
      <div
        className={`nav_menu-container ${isCollapse ? "show-collapse" : ""}
      `}
        ref={divRef}>
        {isCollapse && (
          <img src={closeIcon} alt="close_icon" onClick={handleCollapse} />
        )}
        {menus_data.map((menu, index) => (
          <NavMenu
            content={menu.title}
            key={index}
            navigateName={menu.scrollPageName}
            handleScrollToPage={handleScrollToPage}
          />
        ))}
      </div>
    )
  );
};

export default NavMenuGroup;
