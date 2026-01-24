
import React,{use, useState} from "react";
function Controlled() {


      const [user,setUser]= useState("");
      const [pass ,setPass]= useState("");

      const handleForm=(e)=>{
        e.preventDefault();
        alert(`values are ${user} ${pass}`);
        
        setUser("");
        setPass("");
      }
  return (
    <>  
    <h2>Controlled Form</h2>
    <div style={{gap:"10px "}}>

    <form action=""  onSubmit={handleForm} style={{ alignContent:"center"}} >
     <input type="text" value={user}   style={{padding:"10px",borderRadius:"8px"}}
      onChange={(e)=>setUser(e.target.value)} placeholder="enter name here..." />
        <h2>{user}</h2>
        
          <input type="text" value={pass}   style={{padding:"10px",borderRadius:"8px"}}
      onChange={(e)=>setPass(e.target.value)} placeholder="enter password here..." />

        <h3>{pass}</h3>
        <button type="submit" style={{padding:"10px", alignContent:"center"}}
        >Submit</button>
    </form>
         </div>
       
</>
  )
}

export default Controlled;