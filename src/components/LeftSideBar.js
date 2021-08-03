import React from "react";
import logo from "../images/icons8-twitter-48.png";
import "./LeftSideBar.css";
import {useAuth} from "../context/useContext"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import hashtag from "../images/hashtag.png"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import {useNavigate} from "@reach/router"
function LeftSideBar() {
  const navigate = useNavigate("")
  const {logout}=useAuth()
  const redirectUpload=()=>{
        navigate("/upload",{replace: true})
  }
  const handleLogout=async ()=>{
    try {
      await logout()
      alert("you are now logout")
       navigate("/login",{replace: true})
 } catch (error) {
     alert(error.message)
 }
  }
  return (
    <>
      <div className="twitter-icons">
        <div className="twitter-icon-image">
          <img src={logo} className="left-sidebar-logo" alt="tweet-logo" />
        </div>
        <div className="left-sidebar-icon">
          <div className="left-sidebar-icon-child">
            <HomeOutlinedIcon fontSize="large" />
            <h1>Home</h1>
          </div>
        </div>

        <div className="left-sidebar-icon">
          <div className="left-sidebar-icon-child">
             <img src={hashtag} className="hashtag-icon" alt="hashtag"/>
            <h1>Explore</h1>
          </div>
        </div>

        <div className="left-sidebar-icon">
          <div className="left-sidebar-icon-child">
            <NotificationsNoneIcon fontSize="large" />
            <h1>Notifications</h1>
          </div>
        </div>

        <div className="left-sidebar-icon">
          <div className="left-sidebar-icon-child">
            <MailOutlineIcon fontSize="large" />
            <h1>Messages</h1>
          </div>
        </div>

        <div className="left-sidebar-icon">
          <div className="left-sidebar-icon-child">
            <BookmarkBorderIcon fontSize="large" />
            <h1>Bookmarks</h1>
          </div>
        </div>

        <div className="left-sidebar-icon">
          <div className="left-sidebar-icon-child">
            <PersonOutlineIcon fontSize="large" />
            <h1>Profile</h1>
          </div>
        </div>

        
        <div className="left-sidebar-icon" onClick={redirectUpload}>
          <div className="left-sidebar-icon-child">
            <CropOriginalIcon fontSize="large" />
            <h1>Update Profile</h1>
          </div>
        </div>

        <div className="left-sidebar-icon">
          <div className="left-sidebar-icon-child">
            <MoreHorizIcon fontSize="large" />
            <h1>More</h1>
          </div>
        </div>

        <div className="left-sidebar-icon" onClick={handleLogout}>
          <div className="left-sidebar-icon-child">
            <ExitToAppIcon  fontSize="large" />
            <h1>Logout</h1>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default LeftSideBar;
