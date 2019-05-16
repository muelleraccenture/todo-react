import React from 'react';
import {ItemState} from "../../store/state/ItemState";

export interface ItemListProps {
    readonly items: ReadonlyArray<ItemState>
}

export interface ItemListDispatchProps {

}

export const ItemList = ({items}: ItemListProps & ItemListDispatchProps) => {

    const listItems = items.map(item =>
        <li style={{
                marginTop: '10px',
                backgroundColor: '#B4FCF7',
                color: 'pink',
                listStyleType: "none",
        }}
            key={item.label}>
            <p>
                {item.label}
            </p>
            <p>
                {item.complete}
            </p>
        </li>
    )

    return <div>
                <ul>{listItems}</ul>
            </div>
}
