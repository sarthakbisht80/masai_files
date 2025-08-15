import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/Counter/counterSlice";

const store= configureStore({
    reducer:{
        counter:counterReducer,
    },
});
export default store;