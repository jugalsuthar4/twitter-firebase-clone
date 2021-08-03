import React from 'react'
import "./RightSideBar.css"
import SearchIcon from '@material-ui/icons/Search';
function RightSideBar() {
    return (
        <div className="rightsidebar">
           <div className="search">
                <SearchIcon style={{marginRight:"20px"}}/>
                 <input type="text" placeholder="search-twitter"/>
           </div>
           <div className="topics-to-follow">
               <h2>Topics to follow</h2>
               <div className="topics-list">
                   <p>Science</p>
                   <button className="follow-button">Follow</button>
               </div>
               <div className="topics-list">
                   <p>startups</p>
                   <button className="follow-button">Follow</button>
               </div>
               <div className="topics-list">
                   <p>celebrities</p>
                   <button className="follow-button">Follow</button>
               </div>
               <div className="topics-list" style={{border:"none"}}>
                   <p>Bitcoin cyptocurrency</p>
                   <button className="follow-button">Follow</button>
               </div>
           </div>
        </div>
    )
}

export default RightSideBar
