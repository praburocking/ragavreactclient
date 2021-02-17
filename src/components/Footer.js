import React from "react";
import facebook from "../images/icons/facebook.png";
import twitter from "../images/icons/twitter.png";
import youtube from "../images/icons/youtube.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner-div">
        <p>
          © Copyright 2020 | All rights reserved | Ohtel | Disclaimer | Privacy
          Policy | Terms & Conditions
        </p>
        <div className="social-media-icons">
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
          <a href="#">
            <img src={youtube} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
