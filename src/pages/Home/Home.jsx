import React, { forwardRef } from "react";
import "./Home.scss";

import locationIcon from "../../assets/images/vectors/location.svg";

import qualityLogo from "../../assets/images/vectors/Group 1000002476.svg";
import Navbar from "../../components/Navbar/Navbar";

const Home = forwardRef((props, ref) => {
  const { handleScrollToPage } = props;
  return (
    <>
      <Navbar handleScrollToPage={handleScrollToPage} />
      <div className="hero_container" ref={ref}>
        <div className="hero_side_text_div">
          <h1 className="title">Welcome To The Gourmet Vegan Restaurant</h1>
          <p className="desc">
            Every university has a website or mobile ordering application that
            provides information about the menus of university cafeterias,
            franchise dining locations, and university-based dining spots.
            However, this concept takes things a step further by utilizing the
            macronutrient data provided by the producers.
          </p>
          <div className="btn-group">
            <button className="book-btn">
              <span className="location-icon-parent">
                <img
                  src={locationIcon}
                  alt="location-icon"
                  className="location-icon"
                />
              </span>
              <p className="mb-0">Book Your Table</p>
            </button>
            <button className="explore-btn">
              <p className="mb-0">Explore Our Menu</p>
            </button>
          </div>
        </div>
        <div className="quality-logo">
          <img src={qualityLogo} alt="quality-logo" />
        </div>
      </div>
    </>
  );
});

export default Home;
