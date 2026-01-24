import { useState } from "react";

export const Controlled = () => {
  const [user,setUser]= useState("");
  const [pass,setPass]= useState("");

  const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("User name is ",user);
        setUser("");
        setPass("");

  }
    return (
            <>
                <form type="submit">

                    <input type="text" value={user}
                   placeholder="enter name here" onChange={(e)=>setUser(e.target.value)}  />
                     
                  <h2>{user}</h2>

                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </>

  )
}

