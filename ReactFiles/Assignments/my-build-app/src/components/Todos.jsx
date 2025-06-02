import React, { useEffect, useRef, useState } from "react";



function Todos(){

 const [data,setdata] =  useState([]);
 const [inputData, setinputData] = useState("");

const aref= useRef();


useEffect(()=>{
    aref.current.focus();
},[])
async function  gettodos() {
    let res= await fetch('https://dummyjson.com/todos');
    let result= await res.json();
    let formattedData = result.todos;

    // console.log(result);
    console.log(formattedData);
    setdata(formattedData);
      aref.current.focus();
}

 function addTodo(){

    if(inputData.trim()=="") return;
    let newTodo={
        id: Date.now(),
        todo:inputData,
    }
    setdata([...data,newTodo]);
    aref.current.focus();
    setinputData("");
      console.log(newTodo.todo);  
 }

function DeleteTodo(id)
{
    const filtered= data.filter((todo)=> todo.id!== id);
    setdata(filtered);
    aref.current.focus();

}
return(   
     <>
    <h2>Todos List</h2>
    <button onClick={gettodos}>  GetTodos</button>
    
    <input  ref={aref}  type="text"  value={inputData}
   onChange={(e)=> setinputData(e.target.value)}
   placeholder="enter todo here"
   style={{
    fontFamily:"serif",
    padding:"6px",
    borderRadius:"12px"
   }}
   /> <span>
        <button onClick={addTodo} >AddTodo</button>
        </span>
    <div  >
        <ol>
        {data.map((el)=>(
            
            <li key={el.id}>{el.todo}
            <button onClick={()=>DeleteTodo(el.id)}
                > Delete Todo</button>
            </li>
            
        ))}
        </ol>
    </div>

    
    </>
)
 }
export default Todos;