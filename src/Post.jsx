import { useEffect, useState } from "react"

export default function Post() {
            const [posts, setPosts] = useState([]);
          useEffect(() => {
                    fetch('https://jsonplaceholder.typicode.com/posts')
                              .then(res => res.json())
                              .then(data => setPosts(data))
          }
          , []);

          return (
            <>
            <h1 className="heading-total">Total Posts: {posts.length}</h1>
            <div className="post-card-container">
                              
                              {
                                        posts.map(post => (
                                                  <div className="post-body" key={post.id}>
                                                            <h4 className="card-title">Title: {post.title}</h4>
                                                            <p>{post.body}</p>
                                                  </div>
                                        ))
                              }
                    </div>

            </>
                     

          )
}



