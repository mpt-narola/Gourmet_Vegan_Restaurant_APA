import React from "react";
import "./Gallery.scss";
import { gallery_imgs_data } from "../../utils/data/gallery_imgs_data";
import instagramIcon from "../../assets/images/vectors/social_icons/Instagram.svg";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="title">
        <h2>Gallery</h2>
      </div>
      <div className="img-list">
        {gallery_imgs_data.map((imgPath, index) => (
          <div className="gallery-img" key={index}>
            <img src={imgPath} alt={`image_${index + 1}`} />
            <div className="overlay-text-icon-div">
              <img src={instagramIcon} alt="insta_icon" />
              <p>@gallery_of_the _saveurs</p>
            </div>
            <div className="overlay-box">
              <div className="border-overlay"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="learn-more-btn">
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Gallery;
