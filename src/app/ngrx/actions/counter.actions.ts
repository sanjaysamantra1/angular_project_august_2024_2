import { createAction } from "@ngrx/store";

// action creators, if you call them, they will return action object
export const increment = createAction('Increment Action');
export const decrement = createAction('Decrement Action');
export const reset = createAction('Reset Action');