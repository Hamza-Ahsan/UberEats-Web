import React, { useState } from "react";
import "./Banner.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WatchLaterRoundedIcon from "@material-ui/icons/WatchLaterRounded";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Banner() {
  const [sidebar, Showsidebar] = useState(false);

  const showSidebar = () => {
    Showsidebar(!sidebar);
  };

  return (
    <header
    onClick={showSidebar}
      className="banner"
      style={{
        backgroundImage: `url('https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f54fdfb464db5da7c42e62c735bdf8f1.svg')`,

        backgroundRepeat: "no-repeat",
      }}
    >
      {/*Sidebar  */}
      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toogle">
            <p>X</p>
          </li>
        </ul>
      </div>
      <div className="banner__info">
        <h1>Hungry? You're in the right place</h1>
        <div className="banner__addressInfo">
          <div className="banner__addressInput">
            <LocationOnIcon className="banner__inpIcon" />
            <input type="text" placeholder="Entry delivery address" />
          </div>
          <div className="banner__dropBtn">
            <WatchLaterRoundedIcon />
            <button>Deliver now</button>
            <ArrowDropDownIcon />
          </div>
          <div className="banner__findBtn">
            <button>Find Food</button>
          </div>
        </div>
        <h4 className="banner__signIn">
          <span className="text__underline">Sign In </span>
          <span> for your recent addresses</span>
        </h4>
      </div>
    </header>
  );
}

export default Banner;
