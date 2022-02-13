import { createStore } from '../src/createStore';
import { combineReducers } from '../src/combineReducers';
import { connect } from '../src/connect';

import { counterReducer, countSelector } from './counterReducer';

import { App, mapStateToProps, mapDispatchToProps } from './app';

const store = createStore(combineReducers({
  counter: counterReducer,
}));

const { onCountChange } = connect(App, store, mapStateToProps, mapDispatchToProps);
store.subscribe((state) => onCountChange(countSelector(state)));