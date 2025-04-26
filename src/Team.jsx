import { useState } from "react"

export default function Team() {
          const [team,setTeam]=useState(11);
          const teamStyle={
                    backgroundColor:'lightblue',
                    padding:'20px',
                    borderRadius:'10px',
                    margin:'2rem',
                    border:'none',
                    boxShadow:'0 4px 8px rgba(0,0,0,0.2)',
                    textAlign:'center',
                    fontFamily:'Arial, sans-serif',
                    fontSize:'18px',
                    color:'black',
                    fontWeight:'bold',
                    transition:'transform 0.2s',
                    cursor:'pointer',
                         

          }
                    
       const handleAdd=()=>{
          const newTeam=team+1;
          setTeam(newTeam);
       }
       const handleReduce=()=>{
          const newTeam=team-1;
          setTeam(newTeam);
       }
         
          return(
                    <div style={teamStyle}>
                              <h3 className="card-title">Team</h3>
                              <p>Team Members {team}</p>
                              <button onClick={handleAdd}>ADD</button>
                              <button onClick={handleReduce}>REDUCE</button>
                              
                    </div>
          )
                    
          
}