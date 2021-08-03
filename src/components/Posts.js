import React, { useEffect, useState } from "react";
import Post from "./Post";
import { db } from "../firebase";
import "./Post.css";
import { PhotoSizeSelectSmallTwoTone } from "@material-ui/icons";
import FlipMove from 'react-flip-move';


function Posts() {
  const [posts, setPosts] = useState("");
  const [loading, setLoading] = useState(true);
  console.log(posts);

  useEffect(() => {
    db.collection("tweets").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
    setLoading(false);
  }, []);
  console.log(posts)
  return (
    
          <div className="posts">
          
             {
                posts && posts.map((eachPost)=>{
                    return(
                        <Post key={eachPost.id} tweets={eachPost.post}/>
                    )
                })
             }
           </div>
  );
}

export default Posts;
