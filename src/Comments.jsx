import { useEffect, useState } from "react";
import Comment from "./Comment";

export default function Comments() {
          const [comments,setcomments]=useState([]);
          useEffect(()=>{
                    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
                    .then(res => res.json())
                    .then(data => setcomments(data));
          },[]);
          return(
                    
                    <div className="comments-container">
                              <h2 className="heading-total"> Total Comments: {comments.length}</h2>
                              {
                                        comments.map(comment => <Comment comment={comment} key={comment._id}></Comment>)
                              }
                    </div>
          )
}