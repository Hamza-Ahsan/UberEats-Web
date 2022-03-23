import React from "react";
import "./Template.css";
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
import Rows from "./Rows";

function Template() {
  return (
    <div className="template">
      <div className="template__appInfo">
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/0c6de4f0b3884eb89b28a29ecbc10d59.svg"
          alt="app"
        />
        <h1>There's more to love in the app.</h1>
        <div className="template__mobApp">
          <AndroidIcon fontSize="small" />
          <button>Android</button>
        </div>
        <div className="template__mobApp">
          <AppleIcon fontSize="small" />
          <button>iPhone</button>
        </div>
      </div>
      <div className="template__rows">
        <Rows
          image="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cef389b486cb4827e6ba007f26ebddab.svg"
          title="Feed your employees"
          link="Create a bussiness account"
        />
        <Rows
          image="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7f56b34e6c253cb54a35bacf5150dde9.svg"
          title="Your restaurant, delivered"
          link="Add your restaurant"
        />
        <Rows
          image="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/84d6770ca439c4b1ba2d6f53adc1d039.svg"
          title="Deliver with Uber Eats"
          link="Sign up to deliver"
        />
      </div>
    </div>
  );
}

export default Template;
