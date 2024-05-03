import React from "react";

import "./FoodMenuDetail.scss";

const FoodMenuDetail = ({
  title = "",
  desc = "",
  price = "",
  hideBottomBorder = false,
}) => {
  return (
    <div
      className={`detail-container ${
        hideBottomBorder ? "" : "bottom-dotted-border"
      } `}>
      <div className="title_price_div">
        <h3 className="detail-title">{title}</h3>
        <p className="detail-price">{price}</p>
      </div>
      <p className="detail-desc">{desc}</p>
    </div>
  );
};

export default FoodMenuDetail;
