import React, { useReducer, useState } from "react";

function TodoApp1(){


    function todoReducer(state,action){
        switch(action.type){
            case 'Add':
                return [...state ,{  id:Date.now(), txt :action.payload ,completed:false}]
            
            case "Toogle":
                return state.map(todo=>
                    todo.id===action.payload ? {...todo, completed:!todo.completed  }:todo
                )
            case "Delete" :
                return state.filter(todo=>
                    todo.id !== action.payload 
                )    
            default:
                return state;
        }

    }

    const [todos,dispatch]= useReducer(todoReducer,[]);



    return(
        <>
            <h2>Todo App</h2>
        <button onClick={()=>dispatch({type :"Add", payload:" New task" })} > Add TOdo</button>

        <ul>
            {todos.map((el)=>(

                <li key={el.id} >
                    <span
                    style={{
                        textDecoration: el.completed ? "Line-through":"none",
                        cursor:"pointer",
                        margin:"10px"
                    }}
                    onClick={()=>dispatch({type:"Toogle", payload: el.id})}> {el.txt} </span> 
                   <button onClick={()=>dispatch({type:"Delete",payload: el.id})}> ❌</button>
                   
                    </li>
            ))}
        </ul>
        </>

        
    )
}
export default TodoApp1;