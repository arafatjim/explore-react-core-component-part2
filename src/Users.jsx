import { useEffect, useState } from "react"

export default function Users(){
const [users, setUsers] = useState([]);
useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => setUsers(data))
 },[])
          return(
                    <div>

                              <h1 className="heading-total">Users: {users.length}</h1>
                              <div className="users-card-container">
                                        
                                                  {
                                                            users.map(user => (
                                                                      <div className="card-users" key={users.id}>
                                                                                <h2>Name: {user.name}</h2>
                                                                                <p>Email: {user.email}</p>
                                                                                <p>Phone: {user.phone ? user.phone:'N/A'}</p>
                                                                                <p>Website: {user.website ? user.website:'N/A'}</p>
                                                                                <p>City: {user.address.city ? user.address.city:'N/A'}</p>
                                                                      </div>
                                                            ))
                                                  }
                                        
                              </div>
                              
                    </div>
          )
                    
}

