import {applyMiddleware, createStore} from "redux";
import React from "react";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";


export const store = createStore(rootReducer,applyMiddleware(thunk))