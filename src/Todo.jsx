import './Todo.css'
// import { useEffect, useState } from "react";
export default function Todo({todo}){
          return(
                    <div className="todo-box">
                              <h3 className='title'>Id: {todo.id}</h3>
                              <p className='title'>Title: {todo.title}</p>
                    </div>
          )
}