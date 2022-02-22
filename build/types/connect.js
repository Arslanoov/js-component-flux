export const connect = (component, store, mapStateToProps, mapDispatchToProps) => {
    return component(Object.assign(Object.assign({}, mapStateToProps(store.getState())), mapDispatchToProps(store.dispatch)));
};
//# sourceMappingURL=connect.js.map