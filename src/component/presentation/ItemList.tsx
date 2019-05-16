import React from 'react';
import {ItemState} from "../../store/state/ItemState";

export interface ItemListProps {
    readonly items: ReadonlyArray<ItemState>
}

export interface ItemListDispatchProps {
    selectItem: (index: number) => void
}

export const ItemList = ({items, selectItem}: ItemListProps & ItemListDispatchProps) => {

    const listItems = items.map((item, index) => {

        let itemElement;

        if (item.complete) {
            itemElement = <li style={{
                marginTop: '10px',
                backgroundColor: '#CCCCCC',
                color: 'pink',
                listStyleType: "none",
            }}
                              key={item.label}>
                <button onClick={() => selectItem(index)}>
                    <p>
                        {item.label}
                    </p>
                    <p>
                        {item.complete}
                    </p>
                </button>
            </li>
        } else {
            itemElement = <li style={{
                marginTop: '10px',
                backgroundColor: '#B4FCF7',
                color: 'pink',
                listStyleType: "none",
            }}
                              key={item.label}>
                <button onClick={() => selectItem(index)}>
                    <p>
                        {item.label}
                    </p>
                    <p>
                        {item.complete}
                    </p>
                </button>
            </li>
        }

        return itemElement
    })

    return <div>
                <ul>{listItems}</ul>
            </div>
}
