import { createReducer, on } from "@ngrx/store";
import { addTodo, deleteTodo, toggleTodo } from "../actions/todo.actions";

let initiatState = [
    {
        "id": 1,
        "title": "Go to Office",
        "completed": false
    },
    {
        "id": 2,
        "title": "Deposit amount",
        "completed": false
    }
];
export const todoReducer = createReducer(
    initiatState,
    on(addTodo, (state: any, newTodo) => {
        return [...state, newTodo]
    }),
    on(deleteTodo, (state: any, todoToDelete: any) => {
        return state.filter((todo: any) => todo.id !== todoToDelete.id);
    }),
    on(toggleTodo, (state: any) => {
        return state;
    })
);