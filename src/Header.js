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
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./Firebase";
import { logout, selectUser } from "./features/userSlice";
function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className="header">
      <div class="header__left">
        <img src={LinkedIn} alt="" />
        <div class="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar={true}
          title={user.displayName}
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
