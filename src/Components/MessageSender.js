import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import VideoCamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "../css/MessageSender.css";
import { useStateValue } from "../Contexts/StateProvider";
import db from "../firebase";
import firebase from "firebase";
import { firebaseApp } from "../firebase";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [text, setText] = useState("");
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file); // add file to firebase storage
    setFileUrl(await fileRef.getDownloadURL()); // get the image url that we uploaded
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: fileUrl,
    });

    setText("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            className="messageSender__input"
            placeholder={`What's on your mind ${user.displayName}?`}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className={text === "" ? "" : "active"}>
            Post
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideoCamIcon style={{ color: "#f02849" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <form>
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <label for="file">
              <PhotoLibraryIcon style={{ color: "#45bd62" }} />
              <h3>Photo/Video</h3>
            </label>
          </form>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "#f7b928" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
