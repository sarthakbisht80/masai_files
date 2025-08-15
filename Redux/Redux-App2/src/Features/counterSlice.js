import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name :'Counter', //Unique nam eof slice.
    initialState : {//initial state
        value:0,
    },
    reducers:{//reducer logic can modify state directly
        increment :(state) =>
            {state.value +=1},
        decrement :(state)  =>
            {state.value -= 1},
        reset: (state) =>
            {state.value=0},

}, 
});

export const {increment,decrement,reset} = counterSlice.actions ; //exporting ctions
export default counterSlice.reducer;


//Actions and Reducers in ssingle file counterSlice
