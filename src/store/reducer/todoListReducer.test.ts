import {todoListReducer} from "./todoListReducer";
import {ItemState} from "../state/ItemState";
import {createItemState} from "../../test-util/factory/createItemState";
import {createActionFactory} from "../action/action-utils";
import {selectItemAction} from "../action/SelectItemAction";

describe(todoListReducer.name, () => {

    it('returns prior state when action not handled', function () {
        const priorState: ReadonlyArray<ItemState> = [createItemState({label: "brush teeth", complete: true})]
        const actionFactory = createActionFactory("FAKE_ACTION")

        const newState = todoListReducer(priorState, actionFactory({}))

        expect(newState).toEqual([createItemState({label: "brush teeth", complete: true})])
    });

    it('updates the completed property for the selected item', function () {
        const priorState: ReadonlyArray<ItemState> = [createItemState({label: "brush teeth", complete: false}),
            createItemState({label: "comb hair", complete: false})]

        const newState = todoListReducer(priorState, selectItemAction({itemsIndex: 1}))

        expect(newState[0]).toEqual(createItemState({label: "brush teeth", complete: false}))
        expect(newState[1]).toEqual(createItemState({label: "comb hair", complete: true}))
    });
})
