import {combineReducers} from "redux";
import {userReduce} from "./userReducer";

//Group all reducers
export const rootReducer = combineReducers(
    {
                user:userReduce,
            });