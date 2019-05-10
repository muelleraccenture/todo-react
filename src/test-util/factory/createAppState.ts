import {AppState} from "../../store/state/AppState";

export const createAppState = (partial: Partial<AppState>): AppState => {
    const defaults: AppState = {
        items: []
    }

    return {...defaults, ...partial}
}
