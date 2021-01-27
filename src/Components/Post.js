import React from "react";
import { Avatar } from "@material-ui/core";
import "../css/Post.css";
import { ChatBubbleOutline, ThumbUpOutlined } from "@material-ui/icons";
import ReplyIcon from "@material-ui/icons/Reply";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="image" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpOutlined />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <ReplyIcon className="post__options--share" />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
