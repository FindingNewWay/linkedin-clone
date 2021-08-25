import React, { useState, useEffect } from "react";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Post from "./Post";
import "./Feed.css";
import { db } from "./Firebase";
import firebase from "firebase";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Nguyen Quy Minh",
      description: "5,567 followers",
      message: "test post Firebase " + Math.random() * 10,
      time: "6m",
      photoUrl:
        "https://media-exp1.licdn.com/dms/image/C5603AQGenznk6DXhQw/profile-displayphoto-shrink_100_100/0/1628446126361?e=1635379200&v=beta&t=fpysR9Hab7BUiSpwargDbF4YLB_-czFEmSmB_hxwSPc",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQGenznk6DXhQw/profile-displayphoto-shrink_100_100/0/1628446126361?e=1635379200&v=beta&t=fpysR9Hab7BUiSpwargDbF4YLB_-czFEmSmB_hxwSPc"
            alt=""
          />
          <button onClick={sendPost} type="submit">
            Start a post
          </button>
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
      {posts.map(
        ({ id, data: { name, description, message, time, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            time={time}
            photoUrl={photoUrl}
          />
        )
      )}
    </div>
  );
}

export default Feed;
