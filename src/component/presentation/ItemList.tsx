import React from 'react';
import {ItemState} from "../../store/state/ItemState";

export interface ItemListProps {
    readonly items: ReadonlyArray<ItemState>
}

export interface ItemListDispatchProps {

}

export const ItemList = ({items}: ItemListProps & ItemListDispatchProps) => {

    const listItems = items.map(item =>
        <li key={item.label}>
            <p>
                {item.label}
            </p>
            <p>
                {item.complete}
            </p>
        </li>
    )

    return <div>
                <ul style={{ listStyleType: "none"}}>{listItems}</ul>
            </div>
}
