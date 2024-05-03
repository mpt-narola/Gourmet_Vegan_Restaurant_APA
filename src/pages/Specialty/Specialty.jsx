import React from "react";

import "./Specialty.scss";

import { dish_card_data } from "../../utils/data/dish_card_data";
import DishCard from "../../components/DishCard/DishCard";
import bgLeaf4Vector from "../../assets/images/vectors/leaf4.svg";
import bgLeaf5Vector from "../../assets/images/vectors/leaf-5.svg";
import onionVector from "../../assets/images/vectors/onion.svg";
import garlicVector from "../../assets/images/vectors/garlic.svg";

const Specialty = () => {
  return (
    <div className="specialty-page">
      <div className="bg-leaf4-vector-div">
        <img src={bgLeaf4Vector} alt="bg_leaf4_vector" />
      </div>
      <div className="bg-leaf5-vector-div">
        <img src={bgLeaf5Vector} alt="bg_leaf5_vector" />
      </div>
      <div className="onion-vector-div">
        <img src={onionVector} alt="bg_onion_vector" />
      </div>
      <div className="garlic-vector-div">
        <img src={garlicVector} alt="bg_garlic_vector" />
      </div>
      <div className="title">
        <h2>Our Special Dish</h2>
      </div>
      <div className="desc">
        <p>
          Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet
          arcu, nec vehicula eros.
        </p>
      </div>

      <div className="dish_card_group">
        {dish_card_data.map((dish, index) => (
          <DishCard
            price={dish.price}
            key={index}
            desc={dish.desc}
            imagePath={dish.imagePath}
            isShowAddToCart={dish.isShowAddToCart}
            isShowFilledHeart={dish.isShowFilledHeart}
            isShowRating={dish.isShowRating}
          />
        ))}
      </div>
    </div>
  );
};

export default Specialty;
