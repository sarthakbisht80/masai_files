import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//handling async funcionns in redux using thunk--
export const FetchUser = createAsyncThunk("users/FetchUser", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const result= await response.json();
  const filterData=result;
  return filterData;
});


const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null,
  
    },
    //Importing reducers dont create them mannualy
   extraReducers:(builder)=>{
    builder.addCase(FetchUser.pending ,state =>{
        state.loading=true;
    
    })
    .addCase(FetchUser.fulfilled, (state,action)=>{
        state.loading=false;
        state.data= action.payload;
    })
    .addCase(FetchUser.rejected, (state, action)=>{
            state.loading=false;
            state.error=action.error.message
    });
   },
});
export default userSlice.reducer;
