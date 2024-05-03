import React, { useState } from "react";
import "./DishCard.scss";

import heartNotFilled from "../../assets/images/vectors/heart_not_fill.svg";
import heartFilled from "../../assets/images/vectors/heart_fill.svg";
import ratingVector from "../../assets/images/vectors/rating.svg";

const DishCard = ({
  imagePath = "",
  title = "",
  desc = "",
  price = "",
  isShowFilledHeart = false,
  isShowRating = false,
  isShowAddToCart = false,
}) => {
  const [isFilled, setIsFilled] = useState(isShowFilledHeart);

  const handleHeartClick = () => {
    setIsFilled((current) => !current);
  };

  return (
    <div className="dish-card-container">
      <div className="dish-image-div" onClick={handleHeartClick}>
        <img src={imagePath} alt="dish_image" />
        {isFilled ? (
          <img
            src={heartFilled}
            alt="heart_not_fill"
            className="heart-not-fill"
          />
        ) : (
          <img
            src={heartNotFilled}
            alt="heart_not_fill"
            className="heart-not-fill"
          />
        )}
      </div>
      <div className="dish-detail">
        <div className="dish-title">
          <p>{title}</p>
        </div>
        <div className="dish-desc">
          <p>{desc}</p>
        </div>
        <div className="dish-price_addtocart-div">
          <p className="dish-price">{price}</p>
          {isShowAddToCart || !isShowRating ? (
            <button className="addtocart-btn">Add To Cart</button>
          ) : (
            <img src={ratingVector} alt="rating_icon" className="rating"></img>
          )}
        </div>
      </div>
    </div>
  );
};

export default DishCard;
