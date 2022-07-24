import basketReducer from "./Reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        theBasket: basketReducer
    }
);


export default rootReducer




