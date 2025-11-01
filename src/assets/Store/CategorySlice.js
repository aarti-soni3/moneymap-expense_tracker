import { createSlice } from "@reduxjs/toolkit";
import { initialCategoryData } from "../../initialData";
// import { loadFromStorage } from "../Utils/LocalStorage";
// import { CATEGORY_KEY } from "../Utils/Constants";

// const persistedState = loadFromStorage(CATEGORY_KEY);

export const categorySlice = createSlice({
  //   initialState: persistedState || initialCategoryData,
  initialState: initialCategoryData,
  name: "category",
  reducer: {
    AddCategory: () => {},
    UpdateCategory: () => {},
    DeleteCategory: () => {},
  },
});

export const { AddCategory, UpdateCategory, DeleteCategory } =
  categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
