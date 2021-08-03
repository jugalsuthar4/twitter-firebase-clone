import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import tweetImage from "../images/tweet-image.jfif"
import { IconButton } from '@material-ui/core';
import commentIcon from "../images/speech-bubble.png"
import retweet from "../images/retweet.png"
import like from "../images/heart.png"
import share from "../images/export.png"

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./Post.css"
function Post({id,tweets}) {
    console.log(tweets)
    console.log(id)
    console.log(tweets)
    console.log("avatar is ",tweets.avatar)
    return (
        <>
           <div className="post">
             <div className="post-avatar-username">
                 <div className="post-avatar">
                 <Avatar alt={tweets.username} className="post-image-avatar" src={tweets.avatar} />
        
                 </div>
                 <div className="post-username">
                    <h5>{tweets.username}</h5>
                 </div>
                 
             </div>
             <div className="post-tweet-text">
                 <p className="tweet-text">
                     {tweets.text}
                 </p>
             </div>
             <div className="post-tweet-image">
                <img src={tweets.image} className="tweet-image" alt="tweetimage"/>
             </div>
             <div className="post-like-comment-button">
                 <IconButton style={{color:"#03A9F4"}}><img src={commentIcon} className="post-icons" alt="comment-icon"/></IconButton>
                 <IconButton style={{color:"green"}}><img src={retweet} className="post-icons" alt="retweet-icon"/></IconButton>
                 <IconButton style={{color:"pink"}}><img src={like}  className="post-icons" alt="like-icon"/></IconButton>
                 <IconButton style={{color:"darkblue"}}><img src={share}  className="post-icons" alt="share-icon"/></IconButton>
             </div>
        </div>
        </>
    )
}

export default Post
