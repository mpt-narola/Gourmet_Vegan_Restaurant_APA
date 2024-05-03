import React from "react";

import "./Footer.scss";

import footerLogo from "../../assets/images/logo/Logo 2.svg";
import locationIcon from "../../assets/images/vectors/footerLocation.svg";
import callIcon from "../../assets/images/vectors/call.svg";
import mailIcon from "../../assets/images/vectors/mail.svg";
import { quick_links_data } from "../../utils/data/quick_links_data";
import { opening_hours_data } from "../../utils/data/opening_hours_data";
import { social_icons_data } from "../../utils/data/social_icons_data";
import { payment_icons_data } from "../../utils/data/payment_icons_data";

const Footer = () => {
  return (
    <div className="footer-page">
      <div className="footer-main">
        <div className="logo-contact-div">
          <div className="footer-logo-div">
            <img src={footerLogo} alt="footer_logo" />
          </div>
          <div className="icon-content">
            <img
              src={locationIcon}
              alt="location_icon"
              className="location-icon"
            />
            <span>7/7 lorem. 85A 76530 Baden -Baden Germany</span>
          </div>
          <div className="icon-content">
            <img src={callIcon} alt="call_icon" className="call-icon" />
            <span>+4 917 670 255 759</span>
          </div>
          <div className="icon-content">
            <img src={mailIcon} alt="mail_icon" className="mail-icon" />
            <span>info@gvrataurant.eu</span>
          </div>
        </div>
        <div className="quick-links-div">
          <h4 className="section-title">
            Quick Links
            <span className="underline"></span>
          </h4>
          <div className="quick-links-list">
            {quick_links_data.map((link, index) => (
              <p key={index}>{link}</p>
            ))}
          </div>
        </div>
        <div className="opening-hours-div">
          <h4 className="section-title">
            Opening Hours<span className="underline"></span>
          </h4>
          <div className="opening-hours-list">
            {opening_hours_data.map((day_time, index) => (
              <div className="day_time_div" key={index}>
                <p>{day_time.day}</p>
                <p>{day_time.time}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="social_payment_div">
          <div>
            <h4 className="section-title">
              Follow Us<span className="underline"></span>
            </h4>
            <div className="social-icons-list">
              {social_icons_data.map((iconpath, index) => (
                <img src={iconpath} alt={"social-icon"} key={index} />
              ))}
            </div>
          </div>
          <div>
            <h4 className="section-title">
              Payment Options<span className="underline"></span>
            </h4>
            <div className="social-icons-list">
              {payment_icons_data.map((iconpath, index) => (
                <img src={iconpath} alt={"social-icon"} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-div">
        <p>
          © 2024{" "}
          <span className="web-link">
            <a href="*">Gourmet Vegan Restaurant</a>{" "}
          </span>
          . All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
