import rootReducer from "./reducer/rootReducer";
import {createStore} from "redux";

export const initializeStore = () => {
    return createStore(rootReducer)
}
