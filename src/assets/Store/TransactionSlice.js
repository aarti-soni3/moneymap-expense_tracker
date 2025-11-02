import { createSlice } from "@reduxjs/toolkit";
import { initialTransactionData } from "../../initialData";
import { nanoid } from "nanoid";
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
    updateTransaction: () => {},
    deleteTransaction: () => {},
  },
});

export const { addTransaction, updateTransaction, deleteTransaction } =
  transactionSlice.actions;

export const transactionReducer = transactionSlice.reducer;
