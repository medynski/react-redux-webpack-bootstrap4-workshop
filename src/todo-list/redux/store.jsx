import { createStore, combineReducers } from 'redux';
import todoList from './todosReducer';

const store = createStore(combineReducers({ todoList }));
export default store;
