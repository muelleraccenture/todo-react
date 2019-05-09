import {connect, MapDispatchToPropsFunction, MapStateToProps} from "react-redux";
import {ItemList, ItemListDispatchProps, ItemListProps} from "../presentation/ItemList";
import {AppState} from "../../store/state/AppState";

export const mapStateToProps: MapStateToProps<ItemListProps, void, AppState> = (state) => ({
    items: state.items
})

export const mapDispatchToProps: MapDispatchToPropsFunction<ItemListDispatchProps, void> = (dispatch) => ({

})

export const ItemListContainer = connect(mapStateToProps, null)(ItemList)
