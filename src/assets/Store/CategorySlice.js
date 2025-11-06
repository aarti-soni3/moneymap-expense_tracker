import { createSlice } from "@reduxjs/toolkit";
import { initialCategoryData } from "../InitialData/initialData";
import { nanoid } from "nanoid";
// import { loadFromStorage } from "../Utils/LocalStorage";
// import { CATEGORY_KEY } from "../Utils/Constants";

// const persistedState = loadFromStorage(CATEGORY_KEY);

export const categorySlice = createSlice({
  //   initialState: persistedState || initialCategoryData,
  initialState: initialCategoryData,
  name: "category",
  reducers: {
    addCategory: {
      reducer: (state, action) => {
        console.log("payload :", action.payload);
        state.items.push(action.payload);
      },
      prepare: (categoryData) => {
        const id = nanoid();
        const timeStamp = new Date().toISOString();
        return {
          payload: {
            ...categoryData,
            id: id,
            createdAt: timeStamp,
            isDefault: false,
          },
        };
      },
    },
    updateCategory: (state, action) => {
      console.log("payload :", action.payload);
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index != -1) {
        state.items[index] = {
          ...state.items[index],
          ...action.payload,
        };
      }
      console.log(state.items[index]);
    },
    deleteCategory: (state, action) => {
      console.log(action.payload);
      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { addCategory, updateCategory, deleteCategory } =
  categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
