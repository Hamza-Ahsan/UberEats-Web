import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="data:image/png;base64,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"
          alt="logo"
        />
        <div className="footer__mobApp">
          <img
            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d0558d91063038236b60e3ef71fdc1fd.svg"
            alt="android"
          />
          <img
            className="footer__android"
            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cf6dad406fdfdcd290fd40de9008ae50.png"
            alt="iphone"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
