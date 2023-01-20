import { createAsyncThunk } from "@reduxjs/toolkit";
import { StationType } from "../../constants/mrt.types";

export const updateAppVersion = createAsyncThunk("update/version", async (_version: number) => {
  const version = _version;
  return version;
});

export const updateSearchResult = createAsyncThunk("update/searchresult", async (route: Array<StationType>) => {
  return route;
});
