// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Comments from './Comments';
import Counter from './Counter';
import Photos from './Photos';
import Post from './Post';
import Team from './Team';
import Todo from './Todo';
import Todos from './Todos';
import Users from './Users';

function App() {
  // const [count, setCount] = useState(0)
  function HandleClick(){
    alert('Button clicked');
  }
  const HandleClick2 = () =>{
    alert('Button clicked again');
  }
  const addToFive = ()=>{
    alert('Button clicked addToFive');
  }

  return (
    <>
      
      <h1 className='App-title'>React Core Concepts  Part 2</h1>
      
      <Todos></Todos>
      <Comments></Comments>
      <Post></Post>
      <Users></Users>
      
      <Counter></Counter>

      <button onClick={HandleClick} className="btn">click me</button>
      <button onClick={HandleClick2} className='btn'>Click Me Again</button>
      <button onClick={()=>{alert('Button Cicked third')}} className='btn'>Click Me Third</button>
      <button onClick={()=>addToFive(5)} className='btn'>Click Me Fourth</button>
      {/* <Photos></Photos> */}
      <Team></Team>
      
      
      
    </>
  )
}

export default App
