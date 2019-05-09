import {Action, combineReducers, Reducer} from "redux";
import {todoListReducer} from "./todoListReducer";
import {AppState} from "../state/AppState";

type RootReducerDefinition<T> = {
    readonly [P in keyof T]: Reducer<T[P], Action>
}

export default combineReducers({
    items: todoListReducer,
} as RootReducerDefinition<AppState>)

