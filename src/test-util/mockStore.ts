import {AppState} from "../store/state/AppState";

export const mockStore = (state: AppState) => ({
    getState: () => state,
    dispatch: jest.fn(),
    subscribe: jest.fn(),
    replaceReducer: jest.fn(),
})
