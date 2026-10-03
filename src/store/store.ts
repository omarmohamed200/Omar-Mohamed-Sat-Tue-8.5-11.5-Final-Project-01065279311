import { authReducer } from "@/app/auth/slices/auth.slice";
import { configureStore } from "@reduxjs/toolkit";

type PreloadedState = {
  authReducer: IntitalState;
};

export function createStore(preloadedState: PreloadedState) {
  const myStore = configureStore({
    reducer: {
      authReducer,
    },
    preloadedState,
  });
  return myStore;
}

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<AppStore["getState"]>;
