import {ItemState} from "../state/ItemState";
import {Action} from "redux";
import {DEFAULT_STATE} from "../state/default-state";
import {isAction} from "../action/action-utils";
import {selectItemAction} from "../action/SelectItemAction";

export const todoListReducer = (previousState: ReadonlyArray<ItemState> = DEFAULT_STATE.items, action: Action): ReadonlyArray<ItemState> => {

    if(isAction(selectItemAction, action)) {

        const newState = previousState.map((item, index) => {
            const {itemsIndex} = action
            if (index == itemsIndex) {
                return {label: item.label, complete: !item.complete}
            } else {
                return item
            }
        })

        return newState
    }

    return previousState
}
