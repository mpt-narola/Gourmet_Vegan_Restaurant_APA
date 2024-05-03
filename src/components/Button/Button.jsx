import React from "react";

import "./Button.scss";

const Button = ({
  Icon = <></>,
  Text = <></>,
  handleClick = () => {},
  customClass = "",
}) => {
  return (
    <button className={`cstm-btn ${customClass}`} onClick={handleClick}>
      <Icon />
      <Text />
    </button>
  );
};

export default Button;
