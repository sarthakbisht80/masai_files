import {createSlice} from '@reduxjs/toolkit';

//everthing is inside this slicer name init state, reducers
//purpose : manages state (action ) and give reducers

const counterSlice= createSlice({
//create slice is a helper function from redux-toolkit

    name:"Counter",
    initialState:{value:0},
    reducers:{
        increment:(state)=>{state.value+=1},
        decrement:(state)=>{state.value-=1},
        reset:(state)=>{
            state.value=0
        }
    }
})
export const {increment,decrement,reset}= counterSlice.actions;
export default counterSlice.reducer;
