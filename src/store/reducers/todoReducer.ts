import {todoAction, todoActionTypes, todoState} from "../../types/todo";

const initialState:todoState =
    {
        todos : [],
        loading: false,
        error: null,
        page: 1,
        limit: 10
    }

export function todoReducer(state = initialState,action:todoAction):todoState
{
    switch (action.type)
    {
        case todoActionTypes.FETCH_TODO:
            return {...state,loading:true}
        case todoActionTypes.FETCH_TODO_SUCCESS:
            return {...state,loading: false,todos: action.payload}
        case  todoActionTypes.FETCH_TODO_ERROR:
            return {...state,loading: false,error: action.payload}
        case todoActionTypes.FETCH_TODO_PAGE:
            return {...state,page:action.payload}
        default:
            return state


    }
}