import { ADD_TODO } from "./todoActionTypes";

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: { todo },
    };
}
