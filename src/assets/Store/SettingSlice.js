import { createSlice } from "@reduxjs/toolkit";
// import { loadFromStorage } from "../Utils/LocalStorage";
// import { SETTING_KEY } from "../Utils/Constants";
import { initialSettings } from "../../initialData";

// const persistedState = loadFromStorage(SETTING_KEY);

export const settingSlice = createSlice({
//   initialState: persistedState || initialSettings,
  initialState: initialSettings,
  name: "setting",
  reducers: {
    setTheme: () => {},
  },
});

export const { setTheme } = settingSlice.actions;
export const settingReducer = settingSlice.reducer;
