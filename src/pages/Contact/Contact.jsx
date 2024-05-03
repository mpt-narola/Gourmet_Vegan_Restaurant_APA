import React, { forwardRef } from "react";
import "./Contact.scss";
import Subscribe from "../../components/Search/Subscribe";
const Contact = forwardRef((props, ref) => {
  return (
    <div className="contact-page" ref={ref}>
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
});
export default Contact;
