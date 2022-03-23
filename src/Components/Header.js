import React, { useState, useEffect } from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import "./Header.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { auth } from "../app/firebase";

function Header() {
  const [show, handleShow] = useState(false);

  const transitionHeader = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => {
      window.removeEventListener("scroll", transitionHeader);
    };
  }, []);

  return (
    <>
    <div>
    <div className={`header ${show && "header__white"}`}>
      <div className="header__icon">
        
      </div>
      <div className="header__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Uber_Eats_2018_logo.svg/2560px-Uber_Eats_2018_logo.svg.png"
          alt="Logo"
          />
      </div>
      <div className="header__input">
        <LocationOnIcon className="header__inpIcon" />
        <input type="text" placeholder="Entry delivery address" />
      </div>
      <div className="header__button">
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
    </div>
    </div>
    </>
  );
}

export default Header;
