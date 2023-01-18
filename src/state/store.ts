import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

export default store;
