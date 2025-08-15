import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Features/counterSlice';
import userReducer from './users/usersSlice';
import logger from "redux-logger";


// configstore does the job of create store and combiing all those reducers
export const store = configureStore({
    reducer:{
        counter: counterReducer,
       users:userReducer,
       },
    middleware : getDefaultMiddleware =>getDefaultMiddleware().concat(logger)
});

