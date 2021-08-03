import React,{useState} from "react";
import "./UploadImage.css"
import ProgressBar from 'react-bootstrap/ProgressBar'
import {storage} from "../firebase"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuth} from "../context/useContext"
import { navigate } from "@reach/router";
function UploadImage() {
  const [progress,setProgress]=useState("0")
  const [image,setImage] = useState(null)
  const {currentUser}=useAuth()
  const handleFileChange=(e)=>{
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }
  const updateProfile=()=>{
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
             console.log(url)
             currentUser.updateProfile({
               photoURL: url
             }).then(()=>{
               alert("profile picture updated")
               navigate("/",{replace:true})
             })
             .catch((err)=>{
               alert("unable to update profile")
             })
          });
      }
    );
  }
  return (
    <div className="upload-image">
      <div className="upload">
        <input type="file" name="file" id="file" class="inputfile" onChange={handleFileChange}/>
        <label for="file">Choose a file</label>
        <ProgressBar now={progress} label={`${progress}%`} visuallyHidden />
        <button className="" onClick={updateProfile}>upload</button>
      </div>
    </div>
  );
}

export default UploadImage;
