import {todoListReducer} from "./todoListReducer";
import {ItemState} from "../state/ItemState";
import {createItemState} from "../../test-util/factory/createItemState";
import {createActionFactory} from "../action/action-utils";

describe(todoListReducer.name, () => {

    it('returns prior state when action not handled', function () {
        const priorState: ReadonlyArray<ItemState> = [createItemState({label: "brush teeth", complete: true})]
        const actionFactory = createActionFactory("FAKE_ACTION")

        const newState = todoListReducer(priorState, actionFactory({}))

        expect(newState).toEqual([createItemState({label: "brush teeth", complete: true})])
    });
})
