export default function Comment({comment}){
          return(
                    <div className="comment-box">
                              <h3 className="card-title">Name: {comment.name} </h3>
                              <p>Email: {comment.email}</p>
                              <p>Comment: {comment.body}</p>
                    </div>
          )
}