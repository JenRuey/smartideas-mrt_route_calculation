import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAppVersion = createAsyncThunk(
  "fetch/version",
  async (_version: number) => {
    const version = _version;
    return version;
  }
);
