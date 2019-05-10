import {ItemState} from "../../store/state/ItemState";

export const createItemState = (partial: Partial<ItemState> = {}): ItemState => {
    const defaults: ItemState = {
        label: "",
        complete: false,
    }

    return {...defaults, ...partial}
}
