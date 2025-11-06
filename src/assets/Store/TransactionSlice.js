import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { initialTransactionData } from "../InitialData/initialData";
// import { loadFromStorage } from "../Utils/LocalStorage";
// import { TRANSACTION_KEY } from "../Utils/Constants";

// const persistedState = loadFromStorage(TRANSACTION_KEY);

const transactionSlice = createSlice({
  //   initialState: persistedState || initialTransactionData,
  initialState: initialTransactionData,
  name: "transaction",
  reducers: {
    addTransaction: {
      reducer: (state, action) => {
        //TODO: used
        state.items.push(action.payload);
      },

      //TODO: used
      prepare: (transaction) => {
        const timeStamp = new Date().toISOString();
        const id = nanoid();
        console.log(id);
        return {
          payload: {
            ...transaction,
            id: id,
            createdAt: timeStamp,
          },
        };
      },
    },
    updateTransaction: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index != -1)
        state.items[index] = {
          ...state.items[index],
          ...action.payload,
        };
    },
    deleteTransaction: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { addTransaction, updateTransaction, deleteTransaction } =
  transactionSlice.actions;

export const transactionReducer = transactionSlice.reducer;
