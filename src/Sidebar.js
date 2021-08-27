import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import SidebarOption from "./SidebarOption.js";
import AddIcon from "@material-ui/icons/Add";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
function Sidebar() {
  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__profile">
          <img
            src="https://images.unsplash.com/photo-1547532182-bf296f6be875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
            alt=""
          />
          <div className="sidebar__user">
            <Avatar className="sidebar__avatar" src={user.photoUrl}></Avatar>
            <h2>{user.displayName}</h2>
          </div>

          <h4>Ha Noi university of science and technology</h4>
        </div>
        <a className="sidebar__topLink" href="#">
          <div className="sidebar__connection">
            <h4>Connections</h4>
            <span>5</span>
          </div>
          <span>Grow your network</span>
        </a>
        <a className="sidebar__midLink" href="#">
          <h3>Access exclusive tools & insights</h3>
          <div className="sidebar__premium">
            <FavoriteIcon className="favoriate__icon" />
            <span className="premium__text">Try Premium for free</span>
          </div>
        </a>
        <a className="sidebar__botLink" href="#">
          <div className="sidebar__myitem">
            <TurnedInIcon className="turnedin__icon" />
            <p>My items</p>
          </div>
        </a>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__option">
          <SidebarOption title="Groups" />
          <SidebarOption title="Events" Icon={AddIcon} />
          <SidebarOption title="Followed Hashtags" />
        </div>

        <div className="sidebar__discover">Discover more</div>
      </div>
    </div>
  );
}

export default Sidebar;
