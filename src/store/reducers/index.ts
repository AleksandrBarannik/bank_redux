import {combineReducers} from "redux";
import {userReduce} from "./userReducer";
import {todoReducer} from "./todoReducer";

//Group all reducers
export const rootReducer = combineReducers(
    {
                user:userReduce,
                todo: todoReducer
            });

export type RootState = ReturnType<typeof rootReducer>
