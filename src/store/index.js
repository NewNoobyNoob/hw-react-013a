import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/todo.slice';
import counterReducer from './counter/counter.slice';

const rootReducer = combineReducers({
    todo: todoReducer,
    counter: counterReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})