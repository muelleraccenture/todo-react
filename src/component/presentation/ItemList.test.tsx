import React from "react";
import {ItemList} from "./ItemList";
import {ItemState} from "../../store/state/ItemState";
import renderer, {ReactTestRenderer} from "react-test-renderer"


describe(ItemList.name, () => {
    let tree: ReactTestRenderer, items: ReadonlyArray<ItemState>

    beforeEach(() => {
        items = [
            {label: 'wake me up before I go go', complete: true},
            {label: 'never give you up ', complete: false},
        ]

        tree = renderer.create(<ItemList items={items}/>)
    })

    it('displays items', function () {
        expect(tree).toMatchSnapshot()
    });
})
