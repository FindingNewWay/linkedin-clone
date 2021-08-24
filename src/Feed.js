import React from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import PostAddIcon from "@material-ui/icons/PostAdd";
function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQGenznk6DXhQw/profile-displayphoto-shrink_100_100/0/1628446126361?e=1635379200&v=beta&t=fpysR9Hab7BUiSpwargDbF4YLB_-czFEmSmB_hxwSPc" />
          <button type="submit">Start a post</button>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photos" color="#70b5f9" />
          <InputOption Icon={YouTubeIcon} title="Video" color="#7fc15e" />
          <InputOption Icon={EventIcon} title="Event" color="#e7a33e" />
          <InputOption
            Icon={PostAddIcon}
            title="Write article"
            color="#fc9295"
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
