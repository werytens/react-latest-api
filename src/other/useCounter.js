import { useSyncExternalStore } from "react";

import { createStore } from "./store";

const counterStore = createStore({initialState: 0});

export const useCounter = () => {
    const count = useSyncExternalStore(
      counterStore.subscribe,
      counterStore.getState
    )

    return {
      count, 
      increment: () => counterStore.setState(count + 1), 
      decrement: () => counterStore.setState(count - 1)
    }
}