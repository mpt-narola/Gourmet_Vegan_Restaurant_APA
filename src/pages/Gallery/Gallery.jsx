import React, { forwardRef } from "react";
import "./Gallery.scss";
import { gallery_imgs_data } from "../../utils/data/gallery_imgs_data";
import instagramIcon from "../../assets/images/vectors/social_icons/Instagram.svg";

const Gallery = forwardRef((props, ref) => {
  const slider = document.querySelector(".img-list");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });
  return (
    <div className="gallery-page" ref={ref}>
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
});

export default Gallery;
