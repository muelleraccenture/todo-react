import {ItemState} from "../state/ItemState";
import {Action} from "redux";
import {DEFAULT_STATE} from "../state/default-state";

export const todoListReducer = (previousState: ReadonlyArray<ItemState> = DEFAULT_STATE.items, action: Action): ReadonlyArray<ItemState> => {
    return previousState
}
