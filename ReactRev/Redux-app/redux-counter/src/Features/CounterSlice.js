import React from "react";

import { createSlice } from "@reduxjs/toolkit";

const initialState={value:0};
const Slicer= createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment:(state)=>{state.value+=1},

        decrement:(state)=>{state.value-=1},
        reset:(state)=>{state.value=0}
    },

});
export  const {increment,decrement,reset}= Slicer.actions;


export default Slicer.reducer;