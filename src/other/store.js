export const createStore = ({ initialState }) => {
    const store = {
      state: initialState,
      setState: (newValue) => {
        store.state = newValue;
        store.listeners.forEach((listener) => listener());
      },
      getState: () => {
        return store.state;
      },
      listeners: new Set(),
      subscribe: (callback) => {
        store.listeners.add(callback);
        return () => store.listeners.delete(callback);
      }
    }

    return store;
  }
