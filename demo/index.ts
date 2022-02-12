import { createAction, createSubscriber } from '../src/dispatcher';
import { CounterStore, ACTION_INCREASE, ACTION_DECREASE } from './counterStore';
import { App } from './app';

const counterStoreSubscriber = createSubscriber(new CounterStore());

const actions = {
  increase: createAction(ACTION_INCREASE),
  decrease: createAction(ACTION_DECREASE)
};

App(counterStoreSubscriber, actions.increase, actions.decrease);