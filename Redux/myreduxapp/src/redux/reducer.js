const initialState={
   loading:false
, data:null,
error:null,
}

const dataReducer=(state,action)=>{
switch(action.type){
    case 'Fetch_Start':
        return {...state,loading:true};
    case 'Fetch_Success':
        return {loading:false, data:action.payload}    
    case 'Fetch_Error' :
        return {loading:false, error:action.payload,data:null};

    }

}
export default dataReducer;
