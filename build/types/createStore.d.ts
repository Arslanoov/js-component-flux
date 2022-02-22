export declare const createStore: (rootReducer: any) => {
    getState: () => any;
    dispatch: (action: any) => void;
    subscribe: (listener: any) => number;
};
