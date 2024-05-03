import React from "react";

import "./About.scss";

import chefCookerImg from "../../assets/images/imgs/chef-cooking-kitchen-while-wearing-professional-attire 2.jpeg";
import playBtnIcon from "../../assets/images/icons/Iconplay.svg";
import about2Img from "../../assets/images/imgs/About 2.jpeg";
import about3Img from "../../assets/images/imgs/About 3.png";
import leafVector from "../../assets/images/vectors/leaf.svg";
import leafVector1 from "../../assets/images/vectors/leaf2.svg";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="left-video-thumb">
          <img src={chefCookerImg} alt="chef-cooker" className="chef-cooker" />
          <img src={leafVector} alt="leaf-vector" className="leaf-vector" />
          <button className="play-btn-icon">
            <img src={playBtnIcon} alt="play-icon" />
          </button>
        </div>
        <div className="about-middle-div">
          <div className="small-title">
            <p>About Chef and Kitchen</p>
          </div>
          <div className="title">
            <h2>The Health Food For Wealthy Mood</h2>
          </div>
          <div className="desc">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
          </div>
          <div className="btn">
            <button>Learn More</button>
          </div>
        </div>
        <div className="right-imgs-div">
          <div className="about-img1-div">
            <img
              src={leafVector1}
              alt="leaf2-vector"
              className="leaf2-vector"
            />
            <img src={about2Img} alt="about1_image" className="about-img1" />
          </div>
          <img src={about3Img} alt="about2_image" className="about-img2" />
        </div>
      </div>
    </div>
  );
};

export default About;
