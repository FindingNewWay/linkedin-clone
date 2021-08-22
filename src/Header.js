import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

import LinkedIn from "./resources/images/linkedin.png";
import HeaderOption from "./HeaderOption.js";

function Header() {
  return (
    <div className="header">
      <div class="header__left">
        <img src={LinkedIn} alt="" />
        <div class="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQGenznk6DXhQw/profile-displayphoto-shrink_200_200/0/1628446126361?e=1635379200&v=beta&t=6Wgv8IfB4NKBkH_PlnRGtPAdKNJ1bsA_dUt5Ml5s7Lo"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
