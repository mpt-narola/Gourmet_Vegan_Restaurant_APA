import React from "react";
import "./Contact.scss";
import Subscribe from "../../components/Search/Subscribe";
const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="title">
          <h2>Get Our Promo Code by Subscribing To Our Newsletter</h2>
        </div>
        <div className="subscribe_box">
          <Subscribe />
        </div>
      </div>
    </div>
  );
};
export default Contact;
