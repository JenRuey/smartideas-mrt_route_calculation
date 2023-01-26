import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StationResultType } from "../../constants/mrt.types";
import { updateAppVersion, updateSearchResult } from "../API/appAPI";

interface AppStateInterface {
  version: number;
  result: Array<StationResultType>;
}

const appState: AppStateInterface = {
  version: 1.0,
  result: [],
};

const appSlice = createSlice({
  name: "app",
  initialState: appState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(updateAppVersion.fulfilled, (state: AppStateInterface, action: PayloadAction<number>) => {
        state.version = action.payload;
      })
      .addCase(updateSearchResult.fulfilled, (state: AppStateInterface, action: PayloadAction<Array<StationResultType>>) => {
        state.result = action.payload;
      });
  },
});

export default appSlice;
