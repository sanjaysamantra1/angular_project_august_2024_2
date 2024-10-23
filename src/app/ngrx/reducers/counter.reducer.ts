import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "../actions/counter.actions";

let initiatState = 0;
export const counterReducer = createReducer(
    initiatState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0)
);