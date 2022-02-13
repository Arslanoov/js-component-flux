export const connect = (component, store, mapStateToProps, mapDispatchToProps) => {
  return component({
    ...mapStateToProps(store.getState()),
    ...mapDispatchToProps(store.dispatch)
  });
};