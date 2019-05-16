import {connect, MapDispatchToPropsFunction, MapStateToProps} from "react-redux";
import {ItemList, ItemListDispatchProps, ItemListProps} from "../presentation/ItemList";
import {AppState} from "../../store/state/AppState";
import {selectItemAction} from "../../store/action/SelectItemAction";

export const mapStateToProps: MapStateToProps<ItemListProps, void, AppState> = (state) => ({
    items: state.items
})

export const mapDispatchToProps: MapDispatchToPropsFunction<ItemListDispatchProps, void> = (dispatch) => ({
    selectItem: (index: number) => dispatch(selectItemAction({itemsIndex: index}))
})

export const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemList)
