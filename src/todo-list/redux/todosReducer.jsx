import { ADD_TODO } from "./todoActionTypes";

export default function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [...state, action.payload.todo];
        default:
            return state;
    }
}
