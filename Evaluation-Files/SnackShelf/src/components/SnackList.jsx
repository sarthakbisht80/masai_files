import React from "react";
import { fetchSnacks } from "../firebaseAPI";

export default function SnackList({snack}){

    return(
        <>
            <h2>Snack List</h2>
   <div  style={{
  display :"grid",
  gap:"10px",
  gridTemplateColumns:"repeat(3,1fr)"
   }}>
  {snack.map((el) => (
        <div
          key={el.id}
          style={{
            border: '2px solid grey',
            margin: '10px 0',
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            padding: '10px',
            borderRadius: '8px',
          }}
        >
          <h3>{el.title}</h3>
          <p>Category: {el.category}</p>
          <p>Price: ₹{el.price}</p>
          <img src={el.image} style={{width:"100px"}}/>
          <p>Rating: {el.rating}</p>
        </div>
  ))}
   </div>
        </>
    )
}