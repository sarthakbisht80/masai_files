 export const fetchData =()=>
    {
    return async(dispatch)=>{
        dispatch({type:'Fetch_Start'});
        try {
            const response= await fetch('https://dummyjson.com/docs/todos');
            const result= await response.json();
            dispatch({type:'Fetch_Success',payload :result});

        } catch (error) {
            dispatch({type:"Fetch_Error",payload:"failed to  fecth data"});
        }
    }
}