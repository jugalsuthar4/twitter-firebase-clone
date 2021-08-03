import React from 'react'
import "./TweetFeed.css"
import olympic from "../images/olympics.png"
import InputTweet from "./InputTweet"
import Posts from "./Posts"
function TweetFeed() {
    return (
        <div className="feed">
          <div className="home-header">
            <h3>Home</h3>
            <img src={olympic} className="olympic-icon" alt="olympic"/>
          </div>
          <div className="feed-post">
              <InputTweet/>
              <Posts/>
          </div>
           
        </div>
    )
}

export default TweetFeed
