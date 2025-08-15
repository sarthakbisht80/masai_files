import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


export const fetchUsers= createAsyncThunk('users/fetchUsers',async()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json();
});

const userSlice= createSlice({

    name:"User",
    initialState:{
        data:[],
        loading:false,
    error:null
    },
    extraReducers:builder=>{
        builder.addCase(fetchUsers.pending, (state,action)=>{
            state.loading=false;
            state.data=action.payload
        })
        .addCase(fetchUsers.rejected, (state,action)=>{
            (state.loading=false),
            (state.error=action.error.message)
            
        })
    }
})
export default userSlice.reducer;
