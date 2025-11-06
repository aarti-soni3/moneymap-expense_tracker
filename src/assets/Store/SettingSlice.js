import { createSlice } from "@reduxjs/toolkit";
import { initialSettings } from "../InitialData/initialData";

export const settingSlice = createSlice({
  initialState: initialSettings,
  name: "setting",
  reducers: {
    setTheme: () => {},
  },
});

export const { setTheme } = settingSlice.actions;
export const settingReducer = settingSlice.reducer;
