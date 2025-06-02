import React, { useEffect, useReducer } from "react";
function FetchData(){


    function apiReducer(state, action){
        switch(action.type){
            case 'FetchStart':
                return {...state, loading:true ,error:null};

                case 'Fetch_Success':
            return {...state, loading:false, data :action.payload} ;    

            case 'Fetch_Error':
                return {...state,loading:false,data:action.payload};
             default:
                    return state; 
        }
        }
//initializinfg useReducer
    const [state, dispatch]  = useReducer(apiReducer, {
        loading:false,
        data:null,
        error:null,

    });
    async function getData() {
        dispatch({type:"FetchStart"});
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let result = await response.json();

            dispatch({type:'Fetch_Success', payload:result});

            
        } catch (error) {
           dispatch({type:'Fetch_Error', payload:"Failed to fetch"});
           console.log(error.message);
        
        }

    }
    useEffect(()=>{
        getData()
    },[]);
    
    return(
      <>
      <h2>Fetching Api data</h2>
        {state.loading && <p>Loading....</p>}
        {state.error && <p>{state.error}</p>}
        
        {state.data && (
            <div>
                {state.data.map((item)=>(
                   <div key={item.id} style={{marginBottom:"1rem"}}>
                    <h2 style={{color:"red"}}>{item.title}</h2>
                    <p>{item.body}</p>
                    </div> 
                ))}             
        </div>)}

      </>
    )


}
export default FetchData;

