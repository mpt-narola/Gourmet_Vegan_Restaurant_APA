import React from "react";
import "./FoodMenu.scss";
import menuImage from "../../assets/images/imgs/Menu Image.jpeg";
import FoodMenuDetail from "../../components/FoodMenuDetail/FoodMenuDetail";
import bgLeaf6Vector from "../../assets/images/vectors/leaf_6.svg";
import MenuTab from "../../components/MenuTab/MenuTab";

const food_menu_detail_list_temp = new Array(6);
const food_menu_detail_list = food_menu_detail_list_temp.fill({
  title: "Southern Fried Pickles....",
  price: "$80",
  desc: "Crispy spears with zesty ranch.",
});

const renderDetailList = () => {
  return food_menu_detail_list.map((list, index, arr) => (
    <FoodMenuDetail
      key={index}
      desc={list.desc}
      price={list.price}
      title={list.title}
      hideBottomBorder={arr.length - 1 !== index ? false : true}
    />
  ));
};

const FoodMenu = () => {
  return (
    <div className="food-menu-page">
      <div className="bg-leaf6-vector-div">
        <img src={bgLeaf6Vector} alt="bg_leaf6_vector" />
      </div>
      <div className="title">
        <h2>Our Menu</h2>
      </div>
      <MenuTab />
      <div className="food-menu-detail-section">
        <div className="detail-list">{renderDetailList()}</div>
        <div className="detail-image">
          <img src={menuImage} alt="menu_image" className="menu_img" />
        </div>
        <div className="detail-list">{renderDetailList()}</div>
      </div>
    </div>
  );
};

export default FoodMenu;
