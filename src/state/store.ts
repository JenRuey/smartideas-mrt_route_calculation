import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";

const rootReducer = combineReducers({
  app: appSlice.reducer,
});

const store = setupStore();

export function setupStore(
  preloadedState?: PreloadedState<ReturnType<typeof rootReducer>>
) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type StoreType = ReturnType<typeof setupStore>;
export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

export default store;
