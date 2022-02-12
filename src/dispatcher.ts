export class Dispatcher {
  private stores = [];

  public register(store) {
    if (!store || !store.update) {
      throw new Error('Store should exist and have update property');
    }

    let consumers = [];
    const subscribe = (consumer, notInitialized) => {
      consumer = Array.isArray(consumer) ? consumer : [consumer];
      consumers = consumers.concat(consumer);
      if (!notInitialized) {
        consumer.forEach((c) => c(store));
      }
    };
    const change = () => consumers.forEach((consumer) => consumer(store));

    this.stores.push({
      store,
      change,
    });

    return subscribe;
  }

  public dispatch(action) {
    if (this.stores.length > 0) {
      this.stores.forEach((entry) => entry.store.update(action, entry.change));
    }
  }
}

const dispatcher = new Dispatcher();

export const createAction = (type: string) => {
  if (!type) {
    throw new Error('Action type required');
  }

  return (payload) => dispatcher.dispatch({
    type,
    payload,
  })
};

export const createSubscriber = (store) => dispatcher.register(store);