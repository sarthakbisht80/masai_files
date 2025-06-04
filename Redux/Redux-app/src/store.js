import { createStore } from "redux";
import rootreducer from "./redux/reducers/rootReducer";

const store= createStore(rootreducer);
export default store;
