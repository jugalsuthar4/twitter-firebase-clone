import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./InputTweet.css";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import { useAuth } from "../context/useContext";
import firebase from "firebase"
import {storage,db} from "../firebase"
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'


function InputTweet() {
  const { currentUser } = useAuth();
  const [text, setText] = useState("");
  const [url, setUrl] = useState(null);
  const [image, setImage] = useState("");
  const [progress,setProgress] = useState(0)
  console.log(currentUser)
  console.log(text)
  console.log(image)
  console.log("photo url is  ",currentUser.photoURL)
  const handleTweetImage=(e)=>{
    if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
  }

  const sendTweet=(e)=>{
    e.preventDefault();
    console.log("function is running")
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
   uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
            console.log("image url is ",url)
            db.collection("tweets").add({
              username:currentUser.displayName,
              avatar:currentUser.photoURL,
              image:url,
              text:text,
              uid:currentUser.uid,
              timestamp:firebase.firestore.FieldValue.serverTimestamp()
            
      
          })
          setText("")
          setProgress(0)
          });
      }
    );
}
 
  return (
    <div className="input_tweet">
      <div className="input-avatar">
        <Avatar
          alt="Remy Sharp"
          className="tweet-avatar"
          src={currentUser.photoURL}
        />
      </div>
      <div className="input-post">
        <form>
          <textarea
            rows="1"
            cols="50"
            className="text-area"
            placeholder="Whats happening? "
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="file"
            name="file"
            id="file"
            class="feed-inputfile"
            onChange={handleTweetImage}
          />
          <ProgressBar now={progress} className="progress-bar-design" label={`${progress}%`} visuallyHidden />
          <div className="input-icons">
            <label for="file" className="file-upload">
              <CropOriginalIcon
                style={{ color: "#03A9F4", cursor: "pointer" }}
              />
            </label>
            <button type="submit"  className="tweet__button" onClick={sendTweet}>
              tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputTweet;
