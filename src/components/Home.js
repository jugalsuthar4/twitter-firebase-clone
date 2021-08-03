import React from 'react'
import "./Home.css"
import LeftSideBar from "./LeftSideBar"
import TweetFeed from "./TweetFeed"
import RightSideBar from "./RightSideBar"

function Home() {
    console.log("env variable is " ,process.env)
    return (
        <div className="home">
         <div className="tweet-left-sidebar">
             <LeftSideBar/>
         </div>
         <div className="tweet-feed">
             <TweetFeed />
         </div>
         <div className="tweet-right-sidebar">
            <RightSideBar/>
         </div>
            
        </div>
    )
}

export default Home
