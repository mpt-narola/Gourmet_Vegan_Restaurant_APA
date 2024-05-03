import React, { useState } from "react";

import "./Service.scss";

import { service_btn_data } from "../../utils/data/service_btn_data";
import leaf3 from "../../assets/images/vectors/leaf3.svg";

const Service = () => {
  const [hover, setHover] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(false);

  const handleMouseDown = (e, content) => {
    e.stopPropagation();

    if (hoveredMenu === content && hover) {
      return;
    } else {
      setHover(true);
      setHoveredMenu(content);
    }
  };

  return (
    <div className="service-page">
      <div className="service-container">
        <div className="title">
          <h2>Our Best Services</h2>
        </div>
        <div className="service-btns-group">
          {service_btn_data.map((service, index) => (
            <div
              className={`service-menu-div `}
              key={index}
              onMouseDown={(e) => handleMouseDown(e, service.content)}>
              <div
                className={`menu-img ${
                  hover && hoveredMenu === service.content ? "menu-click" : ""
                }`}>
                {
                  <service.iconPath
                    fill={
                      hover && hoveredMenu === service.content
                        ? "#0b1928"
                        : "#ddbc7a"
                    }
                    stroke={
                      hover && hoveredMenu === service.content
                        ? "#0b1928"
                        : "#ddbc7a"
                    }
                  />
                }
              </div>
              <p className="service-title">{service.content}</p>
            </div>
          ))}
        </div>
        <div className="bg-leaf-img">
          <img src={leaf3} alt="leaf-img" className="leaf3-bg-img" />
        </div>
      </div>
    </div>
  );
};

export default Service;
