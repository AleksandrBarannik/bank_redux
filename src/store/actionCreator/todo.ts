import {Dispatch} from "redux";
import {todoAction, todoActionTypes} from "../../types/todo";
import axios from "axios";


export function fetchTodo(page = 1,limit = 10)
{
    return async function (dispatcher:Dispatch<todoAction>)
    {
        try
        {
            dispatcher({type:todoActionTypes.FETCH_TODO})

            const response = await axios.get("https://jsonplaceholder.typicode.com/todos",
                {params:{_page: page, _limit: limit}})

            dispatcher({type:todoActionTypes.FETCH_TODO_SUCCESS,payload:response.data})
        }
        catch (e)
        {
            dispatcher({
                type:todoActionTypes.FETCH_TODO_ERROR,
                payload: "Ошибка загрузки активностей(дел)"

            })
        }
    }
}

export function setTodoPage(page: number):todoAction
{
    return { type: todoActionTypes.FETCH_TODO_PAGE, payload:page}
}