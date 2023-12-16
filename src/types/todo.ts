export enum todoActionTypes
{
    FETCH_TODO = "FETCH_TODO",
    FETCH_TODO_ERROR ="FETCH_TODO_ERROR",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_TODO_PAGE = "FETCH_TODO_PAGE"

}

export interface todoState
{
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

interface Fetch_Todo
{
    type: todoActionTypes.FETCH_TODO;

}

interface Fetch_Todo_Error
{
    type: todoActionTypes.FETCH_TODO_ERROR;
    payload: string;
}

interface Fetch_Todo_Success
{
    type: todoActionTypes.FETCH_TODO_SUCCESS;
    payload: any []

}

interface Fetch_Todo_Page
{
    type: todoActionTypes.FETCH_TODO_PAGE;
    payload: number;

}

export type todoAction =
    Fetch_Todo
    | Fetch_Todo_Error
    | Fetch_Todo_Success
    | Fetch_Todo_Page
