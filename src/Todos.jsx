import { useEffect, useState } from "react";
import Todo from "./Todo";
import './Todo.css'
export default function Todos(){
          const [todos,setTodos]=useState([]);
          useEffect(()=>{
                    fetch('https://jsonplaceholder.typicode.com/todos')
                    .then(res => res.json())
                    .then(data => setTodos(data));
          },[]);
          return(
                    <div>
                              <h1 className="todos-title">Total Todos: {todos.length}</h1>
                              <div className="todos-container">
                              {
                                        todos.map(todo => <Todo  todo={todo} key={todo._id}></Todo>)
                              }
                              </div>
                    </div>
          )
}