//store in redux toolkit is a centralized place to store state  updated states  actions , and reduxers over which entire application revolves around
//using configurestore crete a store
 import React from "react";
import CounterReducer from "../Features/CounterSlice";
 import { configureStore } from "@reduxjs/toolkit";

 export const store= configureStore({
        reducer:{
            counter: CounterReducer,
        }
 }) ;