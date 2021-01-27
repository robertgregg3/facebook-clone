import React, { useState, useEffect } from "react";
import "../css/Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";
import db from "../firebase";

function Feed() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setposts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.data.id}
          image={post.data.image}
          message={post.data.message}
          profilePic={post.data.profilePic}
          username={post.data.username}
          timestamp={post.data.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
