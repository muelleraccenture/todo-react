import {createActionFactory} from "./action-utils";

export interface SelectItemAction {
    readonly itemsIndex: number
}

export const selectItemAction = createActionFactory<SelectItemAction>("SELECT_ITEM_ACTION")
