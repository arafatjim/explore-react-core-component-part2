import { useState } from "react";

export default function Counter() {
          const [count,setCount]=useState(0);
          const handleAdd=()=>{
                    const newCount=count + 1;
                    setCount(newCount);
          }
          const handleReduce = () =>{
                    const newCount=count - 1;
                    setCount(newCount);
          }
          return(
                    <div className="counter-box">
                              <h3>Counter</h3>
                              <p>Count:{count}</p>
                              <div className="btn-counter">
                              <button className="btn-Add-Reduces" onClick={handleAdd}>Add</button>
                              <button className="btn-Add-Reduces" onClick={handleReduce}>Reduce</button>
                              </div>
                    </div>
          )
}