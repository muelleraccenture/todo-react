import React from 'react';
import {ItemListContainer} from "./ItemListContainer";
import renderer, {ReactTestRenderer} from "react-test-renderer";
import {AppState} from "../../store/state/AppState";
import {Store} from "redux";
import {createAppState} from "../../test-util/factory/createAppState";
import {createItemState} from "../../test-util/factory/createItemState";
import {mockStore} from "../../test-util/mockStore";
import {Provider} from "react-redux";

describe(ItemListContainer.name, () => {
    let tree: ReactTestRenderer, store: Store<AppState>

    beforeEach(() => {

        store = mockStore(createAppState({
            items: [
                createItemState({label: "do laundry", complete: true})
            ]
        }))

        tree = renderer.create(
            <Provider store={store}>
                <ItemListContainer></ItemListContainer>
            </Provider>,
        )
    })

    it("presentation has not changed", () => {
        expect(tree.toJSON()).toMatchSnapshot()
    })
})
