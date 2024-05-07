import React, { forwardRef, useEffect, useRef } from "react";
import "./Gallery.scss";
import { gallery_imgs_data } from "../../utils/data/gallery_imgs_data";
import instagramIcon from "../../assets/images/vectors/social_icons/Instagram.svg";

const Gallery = forwardRef((props, ref) => {
  const slider = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    slider?.current?.addEventListener("mousedown", (e) => {
      isDown = true;
      slider?.current?.classList?.add("active");
      startX = e.pageX - slider?.current?.offsetLeft;
      scrollLeft = slider?.current?.scrollLeft;
    });
    slider?.current?.addEventListener("mouseleave", () => {
      isDown = false;
      slider?.current?.classList.remove("active");
    });
    slider?.current?.addEventListener("mouseup", () => {
      isDown = false;
      slider?.current?.classList.remove("active");
    });
    slider?.current?.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider?.current?.offsetLeft;
      const walk = (x - startX) * 2; //scroll-fast
      slider.current.scrollLeft = scrollLeft - walk;
    });
  }, [slider]);

  return (
    <div className="gallery-page" ref={ref}>
      <div className="title">
        <h2>Gallery</h2>
      </div>
      <div className="img-list" ref={slider}>
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
