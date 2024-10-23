import { createAction, props } from "@ngrx/store";

// action creators, if you call them, they will return action object
export const addTodo = createAction('addTodo', props<any>());
export const deleteTodo = createAction('deleteTodo', props<any>());
export const toggleTodo = createAction('toggleTodo', props<any>());