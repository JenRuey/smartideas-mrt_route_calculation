import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAppVersion } from "../API/appAPI";

interface AppStateInterface {
  version: number;
}

const appState: AppStateInterface = {
  version: 1.0,
};

const appSlice = createSlice({
  name: "app",
  initialState: appState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchAppVersion.fulfilled,
      (state: AppStateInterface, action: PayloadAction<number>) => {
        state.version = action.payload;
      }
    );
  },
});

export default appSlice;
